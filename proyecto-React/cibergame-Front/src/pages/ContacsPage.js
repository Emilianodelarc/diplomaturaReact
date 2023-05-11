import React, { useState } from "react";
import axios from "axios";
import "../styles/components/pages/ContacsPage.css";

const ContacsPage = () => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value, //forma dinamica
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <section className="row">
              <div className="container">
                <div className="background-img">
                  <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                      <div className="contact-form">
                        <div className="heading-section">
                          <h4>
                            <em>Get in contact</em> with us.
                          </h4>
                        </div>

                        <form action="/contacto" method="post" onSubmit={handleSubmit}>
                          <div>
                            <label htmlFor="name" className="contacts_name">
                              Name
                            </label>
                            <input
                              type="text"
                              name="nombre"
                              value={formData.nombre}
                              onChange={handleChange}
                              required
                              placeholder="Pepe Perez"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="contacts_email">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="example@example.com"
                            />
                          </div>

                          <div>
                            <label htmlFor="phone" className="contacts_phone">
                              Phone
                            </label>
                            <input
                              type="tel"
                              name="telefono"
                              value={formData.telefono}
                              onChange={handleChange}
                              id="phone"
                              placeholder="+54 9 1321321321"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="message"
                              className="contacts_message"
                            >
                              Message
                            </label>
                            <textarea
                              name="mensaje"
                              className="message"
                              value={formData.mensaje}
                              onChange={handleChange}
                              required
                              placeholder="Leave your comment here..."
                            ></textarea>
                          </div>
                          {sending ? <p className="mensajeForm">"Enviando..."</p> : null}
                          {msg ? <p className="mensajeForm">{ msg }</p> : null}
                          <button type="submit" name="contact-form">
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContacsPage;
