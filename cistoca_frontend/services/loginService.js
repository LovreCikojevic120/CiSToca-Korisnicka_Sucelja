import database from "../../Database";

const getUser = (userData) =>  
  database.users.find(user => user.name == userData.name && user.lastname == userData.lastname);

export {getUser};