export default function ProfileLogin() {
    return `
<section class="Logon">
<div class="Welcome">
<h1>Welcome to JamSesh!</h1>
<h2><span id="signIn">Sign In</span> or <span id="continue">Continue As Fan</span></h2>
</div>
<h3>Username</h3>  
<input class="logon-profile__name" type="text" placeholder="Enter your username">
<h3>Password</h3>
<input class="logon-profile__password" type="text" placeholder="Enter your password">
</br>
</br>
</br>
<div class="logon-profile__submit">Sign In</div>
</br>
<div class="continue-as-guest">Continue As Fan</div>
</br>
</br>
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