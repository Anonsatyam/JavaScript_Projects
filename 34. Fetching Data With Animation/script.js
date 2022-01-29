const api_url = "https://randomuser.me/api/"
const wrapper = document.querySelector(".wrapper");

async function getapi(url) {
    const response = await fetch(url);
    const data = await response.json();
    showData(data);
}

setTimeout(() => {
    getapi(api_url);
}, 1000);

function showData(data) {
    let ui = `
    <div class="user">
            <img src="${data.results[0].picture.medium}" alt="">
            <ul>
                <li><span>Name:</span> ${data.results[0].name.title} ${data.results[0].name.first}</li>
                <li><span>City:</span> ${data.results[0].location.city}</li>
                <li><span>Country:</span> ${data.results[0].location.country}</li>
            </ul>
        </div>`
    wrapper.innerHTML = ui;
}