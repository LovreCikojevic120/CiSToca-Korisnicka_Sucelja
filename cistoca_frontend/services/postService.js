const setPosts = (postArray) => {
  localStorage.setItem('posts', JSON.stringify(postArray));
}

const getPosts = () => {
  return JSON.parse(localStorage.getItem('posts'));
}

export {setPosts, getPosts};