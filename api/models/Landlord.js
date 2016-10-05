module.exports = {

  attributes: {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },

  options: {
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
}
