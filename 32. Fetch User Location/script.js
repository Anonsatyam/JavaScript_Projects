const button = document.querySelector("button");
const info = document.querySelector(".info")

function getLocation() {
    if (window.navigator.geolocation) {
        button.innerHTML = `Allow To Detect Location <i class="fa fa-warning"></i>`;
        button.style.background = "red";
        navigator.geolocation.getCurrentPosition(async function (position) {
                button.innerHTML = `Detecting Location... 
                <i class="fa fa-search-plus" aria-hidden="true"></i>`;
                button.style.background = "#faee1c"
                button.style.color = "#000000"
                let lat = position.coords.latitude;
                let long = position.coords.longitude
                await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=6e4b94bc21464ee3aa8b89a79cebfc3f`)
                    .then((response) => response.json())
                    .then((data) => {
                        let locationDetails = data.results[0].components;
                        info.innerHTML = `<div>
                            <p>Your Live Location Is 😊</p>
                            <ul>
                                <li><span>Road:</span> ${locationDetails.road}</li>
                                <li><span>City:</span> ${locationDetails.city}</li>
                                <li><span>District:</span> ${locationDetails.state_district}</li>
                                <li><span>State:</span> ${locationDetails.state}</li>
                                <li><span>Postal Code:</span> ${locationDetails.postcode}</li>
                            </ul>
                        </div>`;
                        info.style.visibility = "unset"
                        button.style.color = "#ffffff";
                        button.style.background = "#17b978"
                        button.innerHTML = `Get Data Again <i class="fa fa-refresh" aria-hidden="true"></i>`;
                    }).catch(() => {
                        button.innerHTML = `<p>Something Went Wrong</p>`
                    });
            },
            function (error) {
                if (error.code == 1) {
                    button.innerText = "User Has Blocked The Permission";
                } else if (error.code == 2) {
                    button.innerText = "Position Not Found"
                } else if (error.code == 3) {
                    button.innerText = "TimeOut No Result Found"
                }
            })
    }
}

function reloadPage() {
    location.reload()
}