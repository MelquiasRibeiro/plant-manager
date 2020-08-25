module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('stok', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            plant_id: {
                type: Sequelize.INTEGER,
                references: { model: 'plants', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                alowNull: true,
            },
            amount: {
                type: Sequelize.INTEGER,
            },
        }),

    down: (queryInterface) => queryInterface.dropTable('stok'),
};
