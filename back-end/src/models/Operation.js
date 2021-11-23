const { DataTypes, UUIDV4 }=require("sequelize")

module.exports=(sequelize)=>{
    sequelize.define("operation",{
        id:{
            type:DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true

        },
        concept:{
            type: DataTypes.TEXT
        },
        mont:{
            type:DataTypes.NUMBER
        },
        date:{
            type: DataTypes.TIME
        },
        type:{
            type:DataTypes.ENUM("entry","egress")
        }
        
    })
}