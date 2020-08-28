import { Model, Sequelize } from 'sequelize';

class Saleitem extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                description: Sequelize.STRING,
                price: Sequelize.DECIMAL,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Plant, { foreignKey: 'plant_id', as: 'plant' });
        this.belongsTo(models.Sale, { foreignKey: 'sale_id', as: 'sale' });
    }
}

export default Saleitem;
