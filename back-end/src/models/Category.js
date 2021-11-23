const { DataTypes, UUIDV4 }=require("sequelize")

module.exports=(sequelize)=>{
    sequelize.define('category',{
        id:{
            type:DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true

        },
        name:{
            type:DataTypes.STRING
        }
        
    })
}