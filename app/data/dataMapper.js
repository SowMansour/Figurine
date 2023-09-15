const client = require('./database');

const dataMapper = {
    async getAllFigurines() {
        const result = await client.query(`SELECT * FROM figurine`)
        const figurines = result.rows;
        return figurines
    },

    async getOneFigurine(figId) {
        const result = await client.query(`SELECT * FROM figurine WHERE id = $1`, [figId]);
        const figurine = result.rows[0];
        return figurine;
    }

}


module.exports = dataMapper;