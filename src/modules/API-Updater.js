import updateDom from './DomUpdate';

const loadUsers = async (url) => {
  const response = await fetch(url);

  const users = await response.json();

  updateDom(users.result);

  return users.result;
};

export default loadUsers;