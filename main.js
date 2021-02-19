const menuElement  = document.querySelector('.Menu--elenment');
const profileElement = document.querySelector('.profile')
var isClose = false;
console.log(menuElement);
menuElement.onclick = () => {
    isClose = !isClose;
    profileElement.classList.toggle('active',isClose);
}
