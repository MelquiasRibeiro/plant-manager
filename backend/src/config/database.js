module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'plants',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
