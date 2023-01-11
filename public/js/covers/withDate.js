const cover = document.getElementsByClassName('cover');
const date = new Date();

const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();

const year = date.getFullYear();

const overlayCover = `<h1 class="cover--header cover--header__month">${day} de ${month}</h1>
<p class="cover--header">${year}</p>`

cover[0].innerHTML = overlayCover;