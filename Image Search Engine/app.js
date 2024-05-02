const url = "https://api.unsplash.com/search/photos?page=1&query=office&client_id=";
const accessKey = "_Bq8-W3UQJNSJuGXwKbT6dC_p5IsjVzSyjRvvVRikYY";

let page;
const searchvalue = document.querySelector(".search-bar input");
const btn = document.querySelector(".search-bar button");
let image = document.getElementById("image-boxes");
const sbtn = document.getElementById("sbtn");
const div = document.querySelector("image-boxes");
const myvideo = document.getElementById("myVideo video");


async function imageGenerator() {
    let newurl = `https://api.unsplash.com/search/photos?page=${page}&query=${searchvalue.value}&client_id=${accessKey}&per_page=12`;
    let res = await fetch(newurl);
    let data = await (res.json());
    console.log(data);
    let results = data.results;

    results.map((result) => {
        let pic = document.createElement("img");
        pic.src = result.urls.small;
        let down = document.createElement("a");
        down.href = result.links.download;
        down.target = "blank";
        down.appendChild(pic);
        image.appendChild(down);

        // pic.addEventListener("click", () => {
        //     console.log("click");
        //     document.location.href = down.href;
        //     document.location.href.target = "blank";
        // })
    })
}
const showMore = sbtn.addEventListener("click", () => {
    page++;
    imageGenerator();
})

btn.addEventListener("click", (e) => {
    if (!searchvalue.value) {
        alert("ENter Something..");
    }
    else {
        e.preventDefault();
        page = 1;
        image.innerHTML = "";
        imageGenerator();
        const myVideo = document.getElementById("myVideo");
        if (myVideo) {
            myVideo.style.opacity = "0.5";
        }
        sbtn.style.display = "block";
    }
})