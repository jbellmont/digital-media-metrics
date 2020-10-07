const copyrightText = document.querySelector('.copyright');
const date = new Date;
const year = date.getFullYear();

// Updates the footer year automatically
copyrightText.innerHTML = `Digital Media Metrics &copy; ${year}`;