import Jam from "./components/jam";
import Profile from "./components/profile";
import apiActions from "./api/apiActions";
import listProfiles from "./components/listProfiles";

const appDiv = document.querySelector('#app');

export default function pageBuild() {
    ShowProfiles();
    navHome();
}

function navHome() {
    const homeButton = document.querySelector('.nav__profiles');
    homeButton.addEventListener('click', function () {
        appDiv.innerHTML = ShowProfiles();
    })
}

function ShowProfiles() {
    fetch("https://localhost:44372/api/Profile")
        .then(response => response.json())
        .then(profiles => {
            appDiv.innerHTML = listProfiles(profiles);
            console.log(profiles);

        })
        .catch(err => console.log(err))
}