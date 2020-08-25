import express from 'express';
import path from 'path';
import cors from 'cors';

import Routes from './routes';
import './database';

class APP {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.server.use(Routes);
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
        );
    }
}

export default new APP().server;
