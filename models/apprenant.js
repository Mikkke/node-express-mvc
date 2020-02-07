const dataType = require("sequelize");
const db = require("../db");

const Apprenant = db.define('apprenant', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: dataType.UUID
  },
  firstName: {
    field: "first_name",
    type: dataType.STRING(20)
  },
  lastName: {
    field: "last_name",
    type: dataType.STRING(30)
  },
  createdAt: {
    field: "created_at",
    allowNull: false,
    type: dataType.DATE
  },
  updatedAt: {
    field: "updated_at",
    allowNull: false,
    type: dataType.DATE
  }
});

module.exports = Apprenant;
