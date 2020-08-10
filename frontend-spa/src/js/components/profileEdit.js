export default function ProfileEdit(profile) {
    return `
  
<input class="edit-profile__name" type="text" value="${profile.name}">
<input class="edit-profile__location" type="text" value="${profile.location}">
<input class="edit-profile__instruments" type="text" value="${profile.instruments}">
<input class="edit-profile__image" type="text" hidden="true" value="${profile.image}">
<input class="edit-profile__description" type="text" value="${profile.description}">
<input class="edit-profile__password" type="text" placeholder="Your Password">
<button class="edit-profile__submit" id="${profile.profileId}" value="${profile.profileId}">Update profile</button>
    `
}