export default function JamEdit(jam) {
    return `
  
<input class="edit-jam__name" type="text" value="${jam.name}">
<input class="edit-jam__location" type="text" value="${jam.location}">
<input class="edit-jam__description" type="text" value="${jam.description}">
<input class="edit-jam__date" type="text" hidden="true" value="${jam.eventDate}">
<input class="edit-jam__attendees" type="text" value="${jam.maxNumberOfAttendees}">
<input class="edit-jam__profileId" type="text" hidden="true" value="${jam.profileId}">
<button class="edit-jam__submit" id="${jam.id}" value="${jam.id}">Update Jam</button>
    `
}