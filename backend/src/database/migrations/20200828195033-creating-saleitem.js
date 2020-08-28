module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('saleitems', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.DECIMAL,
            },
            plant_id: {
                type: Sequelize.INTEGER,
                references: { model: 'plants', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                alowNull: true,
            },
            sale_id: {
                type: Sequelize.INTEGER,
                references: { model: 'sales', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                alowNull: true,
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

    down: (queryInterface) => queryInterface.dropTable('saleitems'),
};
