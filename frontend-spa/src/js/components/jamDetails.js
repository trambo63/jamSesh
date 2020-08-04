export default function JamDetails(jam) {
    return `
    <section class="workout-style">
    <div class="workoutdetails-collection"/div>
    <h2>${jam.name}</h2>  
    <p><a class="jamdetails__name" id="${jam.id}" href="#"> <img src="images/${jam.image}" alt="${jam.image}" width="200" height="200"> ${jam.name}</a></p>
    <p>Location: ${jam.location}</li>
    <p>Description: ${jam.description}</li>
    <p>Date: <input type="datetime-local" value="${jam.eventDate}" readonly="readonly"></p>
    <p>Number of people needed: ${jam.maxNumberOfAttendees}</p>
    </section>
    <button class="delete-jam__button" id="${jam.id}" value="${jam.id}">Delete Jam</button>                   
    <button class="jam__edit_button" id="${jam.id}" value="${jam.id}">Edit Jam</button>                   
    
    
    `
}