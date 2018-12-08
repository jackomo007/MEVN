const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    "tasks",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)