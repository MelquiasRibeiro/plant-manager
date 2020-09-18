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
}

export default Plant;
