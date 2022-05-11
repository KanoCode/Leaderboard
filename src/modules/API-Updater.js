const loadUsers = async (url) => {
const response = await fetch(url);
const users = await response.json();

return users;

}

export default loadUsers