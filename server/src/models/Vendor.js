module.exports = (sequelize, DataTypes) => {

    const Vendor = sequelize.define("Vendor", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        },
        status: {
            type: DataTypes.TEXT('tiny'),
            allowNull: false,
            walidate: {
                notEmpty: true
            }
        }

    });

    return Vendor;
}
