module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        }
    });

    return User;
}
