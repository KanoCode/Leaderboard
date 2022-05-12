import './style.css';
import loadUsers from './modules/API-Updater';

loadUsers(
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k4qmG5KqGi0HoiSPKSW5/scores',
);

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', async () => {
  loadUsers(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k4qmG5KqGi0HoiSPKSW5/scores',
  );
});

// form

const myForm = document.querySelector('form');

const addScore = async (data) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k4qmG5KqGi0HoiSPKSW5/scores',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    },
  );
};

myForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  if (name !== '' && score !== '') {
    const data = {
      user: name,
      score,
    };

    await addScore(data);
    myForm.reset();
  }
});
