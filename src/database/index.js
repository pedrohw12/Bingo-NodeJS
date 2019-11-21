import Sequelize from 'sequelize';

import Jogo from '../app/models/Jogo';

import databaseConfig from '../config/database';

const models = [ Jogo ];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
};

export default new Database();

