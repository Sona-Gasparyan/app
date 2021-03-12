let title;
let url = "https://api.nasa.gov/planetary/apod?api_key=hkpObe81RJiwps5PloFLnLLfdHbeJw7SOZWsP3yY";
let dateSelector = document.querySelector("#imgDay")
dateSelector.addEventListener("click", () => {
    console.log("calendar is working")
    sendingRequest()
})
async function sendingRequest() {
    const date = document.getElementById("date").value;
    let response = await fetch(url.concat(`&date=${date}`));
    let commits;
    if (response.ok) {
        commits = await response.json()
    } else {
        alert(response.status)
    }
    console.log(commits)
    creatingInfo(commits)
}
let div = document.createElement("div");
let img = document.createElement("img");
let span = document.createElement("span")

function creatingInfo(commits) {
    document.querySelector("#container").innerHTML = commits.explanation;
    title = commits.title;
    span.append(title)
    let src = commits.url;
    img.src = src;
    div.append(span);
    div.append(img);
    document.body.append(div);
    div.classList.add("img-container");
    img.classList.add("img");
}