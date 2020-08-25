module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('stoks', {
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
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        }),

    down: (queryInterface) => queryInterface.dropTable('stoks'),
};
