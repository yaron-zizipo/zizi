module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("Product", {

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

    return Product;
}
