const S = require("sequelize");
const db = require("../db");

class Page extends S.Model {}

Page.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },
    urlTitle: {
      type: S.STRING,
      allowNull: false,
    },
    content: {
      type: S.STRING,
      allowNull: false,
    },
    status: {
      type: S.ENUM("open", "closed"),
    },
  },
  { sequelize: db, modelName: "page" }
);

module.exports = Page;
