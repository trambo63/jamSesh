export default function JamDetails(jam) {
    return `
    <section class="info-details" id="JamDetails">
    <div class="info-collection">
    <h2>Title: ${jam.name}</h2>  
    <h4><a class="jamdetails__name" id="${jam.jamId}" href="#"> <img src="images/jamphoto.png" alt="${jam.image}" width="200" height="200"></a></h4>
    <h4>Where: ${jam.location}</h4>
    <div>${jam.description}</div>
    <h4>When: <input type="datetime-local" readonly="readonly" value="${jam.eventDate}"</h4>
    <h4>Max Jammers Needed: ${jam.maxNumberOfAttendees}</h4>
    <button class="jam__edit_button" id="${jam.jamId}" value="${jam.jamId}">Edit Jam</button>   
    <button class="jam__joinJam_button" id="${jam.jamId}">Join Jam</button>
    </div>
    <div class="info-collection" id="AttendeesList">                
    <h3>Attendees</h3>
    ${jam.jamsAttending.map(jamAttendee => {
        return `
        <h4>${jamAttendee.profile.name}</h4> 
        <h4>${jamAttendee.profile.instruments}</h4> 
        
        <button class="jam__leaveJam_button" id="${jam.jamId}">Leave Jam</button>
        `
    }).join("")}
    </div>     
    </section>
    <div class="delete-jam">
    <img class="delete-jam__button" src="images/deleteIcon.png" alt="Delete this Sesh" width="40px" height="40px">                   
    </div>
    `
}