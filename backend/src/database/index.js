import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Plant from '../app/models/Plant';
import Stok from '../app/models/Stok';
import Sale from '../app/models/Sale';

const models = [Plant, Sale, Stok];
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
