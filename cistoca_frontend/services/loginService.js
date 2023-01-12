import database from "../../Database";

const setCurrentUser = (userData) => {
  localStorage.setItem('currentUser', JSON.stringify(userData));
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
}

const getUser = (userData) =>  
  database.users.find(user => user.name == userData.name && user.lastname == userData.lastname);

export {getUser, setCurrentUser, getCurrentUser};