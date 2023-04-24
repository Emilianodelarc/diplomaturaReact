var pool = require('./bd')

async function getNovedades(){
    var query = 'select * from novedades'
    var rows = await pool.query(query)
    return rows

} 

async function insertNovedad(obj){
    try {
        var query = "insert into novedades set ?"
        var rows = await pool.query(query,[obj])
        return rows
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function updateNovedad(id, data) {
    try {
        var query = 'UPDATE novedades SET titulo=?, subtitulo=?, cuerpo=? WHERE id=?'
      const result = await pool.query(query,[data.titulo, data.subtitulo, data.cuerpo, id]
      );
      console.log(result);
      return result.affectedRows > 0;
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo actualizar la novedad en la base de datos');
    }
  }

  async function deleteNovedad(id) {
    try {
      const query = 'DELETE FROM novedades WHERE id=?';
      const result = await pool.query(query, [id]);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo eliminar la novedad de la base de datos');
    }
  }

  async function getNovedadById(id) {
    try {
      const query = 'SELECT * FROM novedades WHERE id=?';
      const rows = await pool.query(query, [id]);
      return rows[0];
    } catch (error) {
      console.log(error);
      throw new Error('No se pudo obtener la novedad de la base de datos');
    }
  }

module.exports = {getNovedades, insertNovedad, updateNovedad, deleteNovedad, getNovedadById}