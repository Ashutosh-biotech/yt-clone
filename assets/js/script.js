const nav_btns = [
	"All", "Music", "Sports", "Films", "Courses", "Comedy", "News", "Live", "Gaming", "Podcast", "Trailers", "Vlogs", "Learning", "Fashion", "Animals", "Anime", "Automotive", "Travel", "Education", "Entertainment", "Science", "Technology", "Food", "History", "Comedy", "Movies", "News", "Sports", "Gaming", "Fashion", "Animals", "Anime", "Automotive", "Travel", "Education", "Entertainment", "Science"
]

const nav = document.querySelector("#nav-btns");
nav_btns.forEach(btn => {
	nav.innerHTML += `<div class="nav-btn">${btn}</div>`;
	console.log("hello wor;d");
})