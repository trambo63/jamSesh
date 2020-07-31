export default function JamPost(jamId) {
    return `

<input class="add-jam__name" type="text" placeholder="Jam Name">
<input class="add-jam__location" type="text" placeholder="Jam Location">
<input class="add-jam__description" type="text" placeholder="Jam Description">
<input class="add-jam__date" type="text" placeholder="Jam Date">
<input class="add-jam__attendees" type="text" placeholder="Jam Attendees">
<input class="add-jam__id" type="text" hidden="true" id="${jamId}">
<input class="add-jam__image" type="text" hidden="true" value="songbackground.jpg">
<button class="add-jam__submit">Save Jam</button>
    `
}
