import './style.css';

import loadUsers from './modules/API-Updater';

const loadedUsers = loadUsers('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k4qmG5KqGi0HoiSPKSW5/scores')
 loadedUsers.then(data =>console.log(data))

//  console.log(currentUsers);
const submitBtn = document.querySelector('#submit')
const name = document.getElementById('name');
const score = document.getElementById('score');

submitBtn.addEventListener('click',()=>{
    let name = document.getElementById('name').value;
    let score = document.getElementById('score').value;
    let isNumber = Number(score);

    if(name !=='' && score !== '' && isNumber ){
        console.log(name,score);


        fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k4qmG5KqGi0HoiSPKSW5/scores',{
            method: "POST",
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify({
            user:name,
            score,
            })
            }).then(response => response.json()).then(data => {console.log(data)})
    }
})

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k4qmG5KqGi0HoiSPKSW5/scores')
// .then((response)=> response.json())
// .then((data)=>console.log(data))
