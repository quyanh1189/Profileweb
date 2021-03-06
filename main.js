const menuElement  = document.querySelector('.Menu--elenment');
const profileElement = document.querySelector('.profile')
var isClose = false;
console.log(menuElement);
menuElement.onclick = () => {
    isClose = !isClose;
    profileElement.classList.toggle('Menu--active',isClose);
}

// var headingElement = document.querySelector('h2')
// var file1Element = document.querySelector('.intro__mainfile--m')
// var file2Element = document.querySelector('.intro__mainfile--m1')
// var file3Element = document.querySelector('.intro__mainfile--m2')

// var clickMajor = document.querySelector('.menu--2')
// clickMajor.onclick = () => {
//     headingElement.innerHTML = "My Major"
//     file1Element.innerHTML=`
//     Software Developer Job Description:
//     Learn about the key requirements, duties, responsibilities, and skills that should be in a Software Developer Job Description.`
//     file2Element.innerHTML=`
//     Back End Developer Job Description:
//     Learn about the key requirements, duties, responsibilities, and skills that should be in a Back end Developer Job Description.`
//     file3Element.innerHTML=`
//     Senior Software Engineer Job Description:
//     Learn about the key requirements, duties, responsibilities, and skills that should be in a Senior Software Engineer Job Description.`
//     file1Element.classList.add('style');
//     file2Element.classList.add('style');
//     file3Element.classList.add('style');
//     var contact = document.querySelector('.intro__contact')
//     contact.remove()
// }

// var clickContact = document.querySelector('.menu--4')
// clickContact.onclick = () => {
//     var introElement = document.querySelector('.intro')
//     introElement.remove()
//     var formDiv = document.createElement("div")
//     formDiv.appendChild()
//     introElement.appendChild(formDiv);
// }

