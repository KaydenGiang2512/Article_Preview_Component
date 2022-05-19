//Declaring constants
const $SHARE_BUTTON = document.querySelector('.share-icon');
const $SHARE_ICON = document.querySelector('.arrow');
const $SOCIALS_TAB = document.querySelector('.socials');

//Executing functions
$SHARE_BUTTON.addEventListener("click", togglePopUp);

//Function
function togglePopUp() {
    $SOCIALS_TAB.classList.toggle('visible');
    $SHARE_BUTTON.classList.toggle('dark-share-icon');
    $SHARE_ICON.classList.toggle('light-arrow');
} 


