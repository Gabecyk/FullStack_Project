module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false, // Não aceita coluna vazia
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false, // Não aceita coluna vazia
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false, // Não aceita coluna vazia
        },
    });

    return Posts; 
};