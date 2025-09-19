const User = require('./users')
const AccesType = require('./accessType')
const Role = require('./roles')

// Um user pertence a um AccesType 
User.belongsTo(AccesType, { foreignKey: 'accessTypeId'})
AccesType.hasMany(User, { foreignKey:'accessTypeId' })

//Um User pertence a uma Role 
User.belongsTo(Role, {  foreignKey: 'roleId'})
Role.hasMany(User, { foreignKey: 'roleId'})

module.exports = { User, AccesType, Role }