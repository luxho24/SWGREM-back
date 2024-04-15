import db from "../../connection";
import { DataTypes } from "sequelize";
import { User } from "./user";

export const UserRole = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    rolUsu: {
        type: DataTypes.INTEGER,
    }
},
{ schema: "user", timestamps: false, freezeTableName: true })

UserRole.hasMany(User, {
    foreignKey: {
        name: "rolId",
        allowNull: false,
    },
})

User.belongsTo(UserRole, {
    foreignKey: {
        name: "rolId",
        allowNull: false,
    },
})