import database from "../Database";

const setPostStorage = (postArray) => {
  localStorage.setItem('posts', JSON.stringify(postArray));
}

const getPostStorage = () => {
  let postStorage = JSON.parse(localStorage.getItem('posts'));
  return !postStorage ? database.posts : postStorage;
}

export {setPostStorage, getPostStorage};