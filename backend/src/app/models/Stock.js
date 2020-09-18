import { Model, Sequelize } from 'sequelize';

class Stock extends Model {
    static init(sequelize) {
        super.init(
            {
                amount: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Plant, { foreignKey: 'plant_id', as: 'plant' });
    }
}

export default Stock;
