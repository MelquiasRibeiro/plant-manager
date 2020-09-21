import { Model, Sequelize } from 'sequelize';

class Plant extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                description: Sequelize.STRING,
                price: Sequelize.DECIMAL,
                image: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.hasOne(models.Stock);
    }
}

export default Plant;
