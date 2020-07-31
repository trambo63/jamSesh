import Jam from "./components/jam";
import ProfileDetails from "./components/profileDetails";
import apiActions from "./api/apiActions";
import ListProfiles from "./components/listProfiles";
import MyProfile from "./components/myProfile"
import ProfilePost from "./components/profilePost";
import ProfileEdit from "./components/profileEdit";
import listJams from "./components/listJams";
import JamDetails from "./components/jamDetails";
import JamPost from "./components/jamPost";
import JamEdit from "./components/jamEdit";

const appDiv = document.querySelector('#app');

export default function pageBuild() {
    ShowProfiles();
    navHome();
    ShowJams();
    navJams();
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
            appDiv.innerHTML = ListProfiles(profiles);
            console.log(profiles);

        })
        .catch(err => console.log(err))
}

function navJams() {
    const jamsButton = document.querySelector('.nav__jams');
    jamsButton.addEventListener('click', function () {
        appDiv.innerHTML = ShowJams();
    })
}

function ShowJams() {
    fetch("https://localhost:44372/api/Jam")
        .then(response => response.json())
        .then(jams => {
            appDiv.innerHTML = listJams(jams);
            console.log(jams);

        })
        .catch(err => console.log(err))
}

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-profile__button')) {
        const addProfileSection = document.querySelector('.add-profile');
        addProfileSection.innerHTML = ProfilePost();
    }
})
appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('add-profile__submit')) {
      const profileName = event.target.parentElement.querySelector('.add-profile__name').value;
      const profileLocation = event.target.parentElement.querySelector('.add-profile__location').value;
      const profileInstruments = event.target.parentElement.querySelector('.add-profile__instruments').value;
      const profileDescription = event.target.parentElement.querySelector('.add-profile__description').value;
      console.log("edit")
  
      var requestBody = {
        name: profileName,
        location: profileLocation,
        instruments: profileInstruments,
        description: profileDescription,
        image: "dummy image"
      }
      console.log(requestBody);
  
      apiActions.postRequest(
        "https://localhost:44372/api/Profile",
        requestBody,
        profiles => {
            appDiv.innerHTML = ListProfiles(profiles);
        }
    )
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('edit-profile__submit')) {
      const profileName = event.target.parentElement.querySelector('.edit-profile__name').value;
      const profileLocation = event.target.parentElement.querySelector('.edit-profile__location').value;
      const profileInstruments = event.target.parentElement.querySelector('.edit-profile__instruments').value;
      const profileDescription = event.target.parentElement.querySelector('.edit-profile__description').value;
      console.log("is here");
      const profileId = event.target.parentElement.querySelector('.edit-profile__submit').id;
        console.log("the profile id is " + profileId );
  
      var requestBody = {
        name: profileName,
        location: profileLocation,
        instruments: profileInstruments,
        description: profileDescription,
        image: "dummy image",
        id: profileId
      }
      console.log(requestBody);
  
      apiActions.putRequest(
        `https://localhost:44372/api/Profile/${profileId}`,
        requestBody,
        profile => {
            appDiv.innerHTML = ProfileDetails(profile);
        }
    )
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('profile__edit_button')) {
        const profileId = event.target.parentElement.querySelector('.profile__edit_button').id;
        apiActions.getRequest(
            `https://localhost:44372/api/Profile/${profileId}` ,
            profile => {
                appDiv.innerHTML = ProfileEdit(profile);
            }
        )
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('profile-details__button')) {
        const profileId = event.target.parentElement.querySelector('.profile-details__button').id;
        apiActions.getRequest(
            `https://localhost:44372/api/Profile/${profileId}` ,
            profile => {
                appDiv.innerHTML = ProfileDetails(profile);
            }
        )
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('nav__myprofile')) {
        const profileId = event.target.parentElement.querySelector('.nav__myprofile').id;
        apiActions.getRequest(
            `https://localhost:44372/api/Profile/${profileId}` ,
            profile => {
                appDiv.innerHTML = MyProfile(profile);
            }
        )
    }
})

appDiv.addEventListener('click', function(){
    if(event.target.classList.contains('delete-profile__button')){
        const profileId = event.target.parentElement.querySelector('.delete-profile__button').id;
        
        const profileCallback = () => {
            apiActions.getRequest(
                `https://localhost:44372/api/Profile/`,
                profiles => {
                    console.log("before listing profiles");
                    appDiv.innerHTML = ListProfiles(profiles);
                    console.log("after listing profiles")
                })
        }

        apiActions.deleteRequest(
            `https://localhost:44372/api/Profile/${profileId}`,
            profileCallback
        )
    }
})
//**********************************JAMS******************************************************* */

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('jam-details__button')) {
        console.log("jam details1")
        const jamId = event.target.parentElement.querySelector('.jam-details__button').id;
        apiActions.getRequest(
            `https://localhost:44372/api/Jam/${jamId}` ,
            jam => {
                appDiv.innerHTML = JamDetails(jam);
            }
        )
    }
})


appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('edit-jam__submit')) {
      const jamName = event.target.parentElement.querySelector('.edit-jam__name').value;
      const jamLocation = event.target.parentElement.querySelector('.edit-jam__location').value;
      const jamDescription = event.target.parentElement.querySelector('.edit-jam__description').value;
      const jamDate = event.target.parentElement.querySelector('.edit-jam__date').value;
      const jamAttendees = event.target.parentElement.querySelector('.edit-jam__attendees').value;
      console.log("jam edit is here");
      const jamId = event.target.parentElement.querySelector('.edit-jam__submit').id;
        console.log("the jam id is " + jamId );
  
      var requestBody = {
        name: jamName,
        location: jamLocation,
        description: jamDescription,
        eventDate: jamDate,
        maxNumberOfAttendees: jamAttendees,
        image: "dummy image",
        id: jamId
      }
      console.log(requestBody);
  
      apiActions.putRequest(
        `https://localhost:44372/api/Jam/${jamId}`,
        requestBody,
        jams => {
            appDiv.innerHTML = listJams(jams);
        }
    )
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('jam__edit_button')) {
        const jamId = event.target.parentElement.querySelector('.jam__edit_button').id;
        apiActions.getRequest(
            `https://localhost:44372/api/Jam/${jamId}` ,
            jam => {
                appDiv.innerHTML = JamEdit(jam);
            }
        )
    }
})

appDiv.addEventListener('click', function(){
    if(event.target.classList.contains('delete-jam__button')){
        const jamId = event.target.parentElement.querySelector('.delete-jam__button').id;
        
        const jamCallback = () => {
            apiActions.getRequest(
                `https://localhost:44372/api/Jam/`,
                jams => {
                    console.log("before listing jams");
                    appDiv.innerHTML = listJams(jams);
                    console.log("after listing jams")
                })
        }

        apiActions.deleteRequest(
            `https://localhost:44372/api/Jam/${jamId}`,
            jamCallback
        )
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-jam__button')) {
        const addJamSection = document.querySelector('.add-jam');
        addJamSection.innerHTML = JamPost();
    }
})
appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('add-jam__submit')) {
        const jamName = event.target.parentElement.querySelector('.add-jam__name').value;
        const jamLocation = event.target.parentElement.querySelector('.add-jam__location').value;
        const jamDescription = event.target.parentElement.querySelector('.add-jam__description').value;
        const jamDate = event.target.parentElement.querySelector('.add-jam__date').value;
        const jamAttendees = event.target.parentElement.querySelector('.add-jam__attendees').value;
      console.log("add jam")
  
      var requestBody = {
        name: jamName,
        location: jamLocation,
        description: jamDescription,
        eventDate: jamDate,
        maxNumberOfAttendees: jamAttendees,
        image: "dummy image",
      }
      console.log(requestBody);
  
      apiActions.postRequest(
        "https://localhost:44372/api/Jam",
        requestBody,
        jams => {
            appDiv.innerHTML = listJams(jams);
        }
    )
    }
})