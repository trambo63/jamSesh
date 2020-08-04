export default function ProfileDetails(profile) {
    return `
    <section class="workout-style">
    <div class="workoutdetails-collection"/div>
    <h2>${profile.name}</h2>  
    <p><a class="profiledetails__name" id="${profile.id}" href="#"> <img src="images/${profile.image}" alt="${profile.image}" width="200" height="200"> ${profile.name}</a></p>
    <p>Location: ${profile.location}</p>
    <p>Instruments: ${profile.instruments}</p>
    <p>About: ${profile.description}</p>
    </section>
    <button class="delete-profile__button" id="${profile.id}" value="${profile.id}">Delete Profile</button>                   
    <button class="profile__edit_button" id="${profile.id}" value="${profile.id}">Edit Profile</button>                   
    
    `
}       