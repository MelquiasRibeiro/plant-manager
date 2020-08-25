module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('sales', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            payment_type: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            note: {
                type: Sequelize.STRING,
            },
            expected_price: {
                type: Sequelize.DECIMAL,
            },
            sele_price: {
                type: Sequelize.DECIMAL,
            },
            discount: {
                type: Sequelize.DECIMAL,
            },
            items: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        }),

    down: (queryInterface) => queryInterface.dropTable('sales'),
};
