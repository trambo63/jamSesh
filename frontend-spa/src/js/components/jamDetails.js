export default function JamDetails(jam) {
    return `
    <li class="workoutdetails-collection"/li>
    <h2>${jam.name}</h2>  
    <li><a class="jamdetails__name" id="${jam.id}" href="#"> <img src="images/${jam.image}" alt="${jam.image}" width="200" height="200"> ${jam.name}</a></li>
    <li>${jam.location}</li>
    <li>${jam.description}</li>
    <li>${jam.eventDate}</li>
    <li>${jam.maxNumberOfAttendees}</li>

    <button class="delete-jam__button" id="${jam.id}" value="${jam.id}">Delete Jam</button>                   
    <button class="jam__edit_button" id="${jam.id}" value="${jam.id}">Edit Jam</button>                   
    
    
    `
}