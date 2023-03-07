module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define("Category", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        }
    });

    return Category;
}
