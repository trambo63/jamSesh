export default function ProfileEdit(profile) {
    return `
  
<input class="edit-profile__name" type="text" value="${profile.name}">
<input class="edit-profile__location" type="text" value="${profile.location}">
<input class="edit-profile__instruments" type="text" value="${profile.instruments}">
<input class="edit-profile__image" type="text" hidden="true" value="${profile.image}">
<input class="edit-profile__description" type="text" value="${profile.description}">
<button class="edit-profile__submit" id="${profile.id}" value="${profile.id}">Update profile</button>
    `
}