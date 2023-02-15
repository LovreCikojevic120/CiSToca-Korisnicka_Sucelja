import database from '../Database.js'

const setCurrentUser = (userData) => {
  localStorage.setItem('currentUser', JSON.stringify(userData));
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
}

const findUser = (userData) =>  
  database.users.find(user => user.username == userData.username && user.password == userData.password);

export {findUser, setCurrentUser, getCurrentUser};