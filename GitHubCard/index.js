import axios from 'axios';

const cards = document.querySelector('.cards');
addToCards('emcleary');
const instructors = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell',
]
instructors.forEach( elem => addToCards(elem) );


function addToCards(username) {
    const gitHubURL = `https://api.github.com/users/${username}`;
    // Get data (if possible)
    axios.get(gitHubURL)
	.then(function (data) {
	    // Get new card using data
	    const card = makeInstructorCard(data);
	    card.className = 'card';
	    // Append new card to cards
	    cards.appendChild(card);
	    // // Return followers
	    // debugger
	    // return data
	})
	// .then(function (data) {
	//     // Get followers url
	//     const followersURL = data.followers_url;
	//     axios.get(followersURL)
	// 	.then(function(followersArray) {
	// 	    debugger
	// 	    followersArray.forEach( follower => {
	// 		addToCards(follower.login);
	// 	    });
	// 	})
	// 	.catch(function(error) {
	// 	    console.log(error);
	// 	})
	// })
	.catch(function(error) {
	    console.log(error);
	})
}

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// const myGitHubURL = 'https://api.github.com/users/emcleary';
const myGitHubURL = 'https://api.github.com/users/tetondan';
axios.get(myGitHubURL)
    .then(function (data) {
	console.log('no error!')
    })
    .catch(function (error) {
	console.log(error)
    })
	  


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function makeInstructorCard(userDataObj) {
    
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.setAttribute('src', userDataObj.data.avatar_url);
    card.appendChild(image);

    const cardInfo = document.createElement('div');
    cardInfo.className = 'card-info';
    card.appendChild(cardInfo);

    const name = document.createElement('h3');
    name.className = 'name';
    name.textContent = userDataObj.data.name;
    cardInfo.appendChild(name);

    const username = document.createElement('p');
    username.className = 'username';
    username.textContent = userDataObj.data.login;
    cardInfo.appendChild(username)
    
    const profile = document.createElement('p');
    profile.innerHTML = `Profile: <a href=${userDataObj.data.html_url}>${userDataObj.data.html_url}</a>`;
    cardInfo.appendChild(profile);
  
    const location = document.createElement('p');
    location.className = 'location';
    location.textContent = `Location: ${userDataObj.data.location}`;
    cardInfo.appendChild(location)

    const followers = document.createElement('p');
    followers.textContent = userDataObj.data.followers;
    cardInfo.appendChild(followers);
  
    const following = document.createElement('p');
    following.textContent = userDataObj.data.following;
    cardInfo.appendChild(following);

    const bio = document.createElement('p');
    bio.textContent = userDataObj.data.bio;
    cardInfo.appendChild(bio);

    return card;
}
