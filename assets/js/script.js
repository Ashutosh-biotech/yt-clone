const random = (initial, final) => Math.floor(Math.random() * (final - initial + 1) + initial);


const $tags = [
	"All", "Shots", "Games", "Music", "Sports", "Gaming",
	"News", "Travel", "Sports", "Live", "Html", "Css", "Javascript", "C", "C++", "Python", "Java", "C#", "Ruby", "Rust", "Kotlin", "Php", "Swift", "AWS", "Azure", "Google cloud", "Devops", "h"
]

const $videos = [
	["bg-image1", "The Best of 2022", "1.2M views", "1 month ago"],
	["bg-image2", "The Best of 2021", "10k views", "3 months ago"],
	["bg-image3", "The Best of 2020", "2.2M views", "5 months ago"],
	["bg-image4", "The Best of 2019", "1M views", "7 months ago"],
	["bg-image5", "The Best of 2018", "456 views", "9 months ago"],
	["bg-image6", "Best of beauty", "200k views", "14 days ago"],
	["bg-image7", "Watch Anime: Warrior Girl", "570k views", "2 years ago"],
	["bg-image8", "Roaring of thunder", "50k views", "1 year ago"],
	["bg-image9", "Watch Isekai Anime", "700k views", "2 years 5 Months ago"],
	["bg-image10", "Feel the mountains, valley and ardour the nature", "100k views", "6 days ago"],
	["bg-image11", "Ancient Tree", "10k views", "9 years ago"],
	["bg-image12", "Foresight in 3000s", "100k views", "11 hours ago"]
]

const $shorts = [
	["shorts-img1", "Romantic seen: Kiss Manhua", "1.2M views"],
	["shorts-img2", "Elegant scenes of Anime", "107k views"],
	["shorts-img3", "My way, your workout", "17k views"],
	["shorts-img4", "Explore Grand library", "1M views"],
	["shorts-img5", "Rose Fashion #fashion&beauty", "456 views"],
	["shorts-img6", "Alien invasion #trending #alien", "200k views"],
	["shorts-img7", "Attack on Trump, rampage in USA", "550k views"],
	["shorts-img8", "Photoshop tips and tricks", "50k views"],
	["shorts-img9", "Rocking Band", "700k views"],
	["shorts-img10", "Worlds Dangerous snake", "100k views"],
	["shorts-img11", "MEAN Roadmap", "10k views"],
	["shorts-img12", "2025 Miss Haryana", "2.6M views"]
]

// Tags scroll
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

// Embed video and shorts
let repeat;

const $data = (data) => {
	return `
		            <div class="card">
                        <div class="thumbnail pointer">
                            <div class="image ${data[0]}"></div>
                            <div class="overlay">10:30</div>
                        </div>
                        <div class="details">
                            <img src="./assets/img/avatar.jpg" alt="">
                            <div class="desc">
                                <h4 class="title">${data[1]}</h5>
                                    <p class="channel-name">
                                        Ashutosh Kumar
                                    </p>
                                    <p class="views_time">
										${data[2]} &bull; ${data[3]}
                                    </p>
                            </div>
                            <div class="more center pointer">
                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light"
                                    data-icon="ellipsis-vertical" class="svg-inline--fa fa-ellipsis-vertical fa-w-4"
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                    <path
                                        d="M64 128C81.674 128 96 113.674 96 96S81.674 64 64 64C46.328 64 32 78.326 32 96S46.328 128 64 128ZM64 224C46.328 224 32 238.326 32 256S46.328 288 64 288C81.674 288 96 273.674 96 256S81.674 224 64 224ZM64 384C46.328 384 32 398.326 32 416S46.328 448 64 448C81.674 448 96 433.674 96 416S81.674 384 64 384Z"
                                        fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <div class="options"></div>
                    </div>
	`;
}
// 		Upload 1
const $upload1 = document.querySelector(".upload1");

repeat = random(3, 6);
for (let index = 0; index < repeat; index++) {
	let video = $videos[random(0, 11)];
	$upload1.innerHTML += $data(video);
}

// 		Upload 2
const $upload2 = document.querySelector(".upload2");

for (let index = 0; index < 10; index++) {
	let short = $shorts[random(0, 11)];
	$upload2.innerHTML += `
	<div class="card">
                        <div class="thumbnail pointer">
                            <div class="image ${short[0]}"></div>
                        </div>
                        <div class="details">
                            <div class="detail">
                                <h4 class="title">${short[1]}</h4>
                                <p class="views">${short[2]}</p>
                            </div>
                            <div class="more center pointer">
                                <svg aria-hidden="true" focusable="false" data-prefix="fa-light"
                                    data-icon="ellipsis-vertical" class="svg-inline--fa fa-ellipsis-vertical fa-w-4"
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                    <path
                                        d="M64 128C81.674 128 96 113.674 96 96S81.674 64 64 64C46.328 64 32 78.326 32 96S46.328 128 64 128ZM64 224C46.328 224 32 238.326 32 256S46.328 288 64 288C81.674 288 96 273.674 96 256S81.674 224 64 224ZM64 384C46.328 384 32 398.326 32 416S46.328 448 64 448C81.674 448 96 433.674 96 416S81.674 384 64 384Z"
                                        fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
				`;

}

// 		upload 3
const upload3 = () => {
    const $upload3 = document.querySelector(".upload3");

    for (let index = 0; index < 12; index++) {
        let video = $videos[random(0, $videos.length - 1)];
        $upload3.innerHTML += $data(video);
    }
};

upload3();


window.addEventListener("scroll", () => {
	if (window.innerHeight + window.scrollY + 200 >= document.body.offsetHeight) {
		upload3();
	}
});