import database from '../Database.js'

const setCurrentUser = (userData) => {
  localStorage.setItem('currentUser', JSON.stringify(userData));
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
}

const findUser = (userData) =>  
  database.users.find(user => user.name == userData.name && user.lastname == userData.lastname);

export {findUser, setCurrentUser, getCurrentUser};