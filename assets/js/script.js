const $tags = [
	"All", "Shots", "Games", "Music", "Sports", "Gaming",
	"News", "Travel", "Sports", "Live", "Html", "Css", "Javascript", "C", "C++", "Python", "Java", "C#", "Ruby", "Rust", "Kotlin", "Php", "Swift", "AWS", "Azure", "Google cloud", "Devops"
]

const tag = document.querySelector(".filters");

$tags.forEach(element => {
	tag.innerHTML += `<span class="tags pointer center">${element}</span>`
});

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
	tag.scrollLeft -= 100;
	rightArrow.parentElement.style.display = "block";
	if (tag.scrollLeft === 0) {
		leftArrow.parentElement.style.display = "none";
	}
});

rightArrow.addEventListener("click", () => {
	tag.scrollLeft += 100;
	leftArrow.parentElement.style.display = "block";
	if (Math.floor(tag.scrollLeft) === tag.scrollWidth - tag.clientWidth) {
		rightArrow.parentElement.style.display = "none";
	}
});

leftArrow.parentElement.style.display = "none";
rightArrow.parentElement.style.display = "block"

// tag.scrollLeft = 0