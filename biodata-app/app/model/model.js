module.exports = (Sequelize, sequelizeConnection) => {
    const Bio = sequelizeConnection.define('biodata', {
        nama: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tempatLahir: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tanggalLahir: {
            type: Sequelize.DATEONLY,
        },
        alamat: {
            type: Sequelize.STRING
        }
    });

    return Bio;
}