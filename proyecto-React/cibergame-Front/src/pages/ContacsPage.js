import React from "react";
import '../styles/components/pages/ContacsPage.css';
const ContacsPage = () => {
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

                        <form>
                          <div>
                            <label htmlFor="name" className="contacts_name">
                              Name
                            </label>
                            <input
                              type="text"
                              name="introducir_name"
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
                              name="phone"
                              id="phone"
                              placeholder="+54 9 1321321321"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="subject"
                              className="contacts_subject"
                            >
                              Subject
                            </label>
                            <input
                              type="text"
                              name="subject"
                              required
                              placeholder="subject"
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
                              name="message"
                              className="message"
                              required
                              placeholder="Leave your comment here..."
                            ></textarea>
                          </div>

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
