export default function ProfileLogin() {
    return `
<section class="Logon">
<h3>Username</h3>  
<input class="logon-profile__name" type="text" placeholder="Enter your username">
<h3>Password</h3>
<input class="logon-profile__password" type="text" placeholder="Enter your password">
<button class="logon-profile__submit">Logon</button>
</section>
<div class="SideImages">
<div id="leftImage">
<img src="images/RedSpaceImage1.png" alt="guitarist" height="450" width="250">
</div>
<div id="rightImage">
<img src="images/RedSpaceImage2.png" alt="drummer" height="450" width="250">
</div>
</div>

    `
}