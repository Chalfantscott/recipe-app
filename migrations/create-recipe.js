module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Recipes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING
        },
        ingredients: {
          type: Sequelize.STRING
        },
        preparetime: {
          type: Sequelize.INTEGER
        },
        step1: {
          type: Sequelize.STRING
        },
        step2: {
          type: Sequelize.STRING
        },
        step3: {
          type: Sequelize.STRING
        },
        step4: {
          type: Sequelize.STRING
        },
        step5: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Recipes');
    }
  };