import Sequelize, { Model } from 'sequelize';

class Jogo extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Jogo;