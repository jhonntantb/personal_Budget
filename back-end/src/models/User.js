const { DataTypes, UUIDV4 }=require("sequelize")

module.export=(sequelize)=>{
    sequelize.define("user",{
        id:{
            type:DataTypes.UUID,
            defaultValue: UUIDV4
        },
        name:{
            type:DataTypes.STRING
        },
        balance:{
            type:DataTypes.NUMBER
        }
    })
}