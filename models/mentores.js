const { database } = require("../config/database")

module.exports =(sequelize, DataTypes)=>{
    const mentores = sequelize.define(
        'Mentores',{
            nome: DataTypes.STRING,
            email:DataTypes.STRING,
            username:DataTypes.STRING,
            data_nascimento:DataTypes.DATE

        },{
            tableName: 'mentores',
            timestamps:false
        }
    )
}