import { Model, Sequelize } from 'sequelize';

class Sale extends Model {
    static init(sequelize) {
        super.init(
            {
                payment_type: Sequelize.INTEGER,
                note: Sequelize.STRING,
                expected_price: Sequelize.DECIMAL,
                sale_price: Sequelize.DECIMAL,
                discount: Sequelize.DECIMAL,
                items: Sequelize.STRING,
                is_sell: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.hasMany(models.Saleitem);
    }
}

export default Sale;
