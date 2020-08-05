export default function JamDetails(jam) {
    return `
    <section class="workout-style">
    <div class="workoutdetails-collection"/div>
    <h2>${jam.name}</h2>  
    <li><a class="jamdetails__name" id="${jam.jamId}" href="#"> <img src="images/${jam.image}" alt="${jam.image}" width="200" height="200"> ${jam.name}</a></li>
    <li>${jam.location}</li>
    <li>${jam.description}</li>
    <li>${jam.eventDate}</li>
    <li>${jam.maxNumberOfAttendees}</li>

    <button class="delete-jam__button" id="${jam.jamId}" value="${jam.jamId}">Delete Jam</button>                   
    <button class="jam__edit_button" id="${jam.jamId}" value="${jam.jamId}">Edit Jam</button>                   

    
    
    `
}