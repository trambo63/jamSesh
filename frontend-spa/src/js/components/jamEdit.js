export default function JamEdit(jam) {
    return `
  
<input class="edit-jam__name" type="text" value="${jam.name}">
<input class="edit-jam__location" type="text" value="${jam.location}">
<input class="edit-jam__description" type="text" value="${jam.description}">
<input class="edit-jam__date" type="datetime-local" id="meeting-time" value="${jam.eventDate}">
<input class="edit-jam__attendees" type="text" value="${jam.maxNumberOfAttendees}">
<input class="edit-jam__profileId" type="text" hidden="true" value="${jam.profileId}">
<button class="edit-jam__submit" id="${jam.jamId}" value="${jam.jamId}">Update Jam</button>
<h3>Attendees</h3>
${jam.jamsAttending.map(jamAttendee => {
    return `
    <h4>${jamAttendee.profile.name}</h4> 
    <h4>${jamAttendee.profile.instruments}</h4> 

    <button class="jam__leaveJam_button" id="${jamAttendee.profileId}">Leave Jam</button>
 
    `
}).join("")} 

`
}