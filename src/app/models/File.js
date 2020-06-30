import Sequelize from 'sequelize'

class File extends Sequelize.Model {
  static init() {
    super.init({
      name: Sequelize.STRING,
      path: Sequelize.STRING,
    })
    return this
  }
}
export default File
