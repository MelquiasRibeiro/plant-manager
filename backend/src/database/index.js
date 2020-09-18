import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Plant from '../app/models/Plant';
import Stock from '../app/models/Stock';
import Sale from '../app/models/Sale';
import Saleitem from '../app/models/Saleitem';

const models = [Plant, Sale, Stock, Saleitem];
class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}
export default new Database();
