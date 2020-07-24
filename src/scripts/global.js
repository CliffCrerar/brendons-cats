
const frame = document.getElementById('frame');
const footer = document.getElementById('page-links');
const footerElement = document.getElementsByTagName('footer')[0];
const credits = document.getElementById('about-container');
const pageHeader = document.getElementById('page-header-title');
const backHome = document.getElementById('back-home');
console.log('btnDiv: ', footer);
console.log('frame: ', frame);

frame.src = loadStyle(location.pathname);

// location.href === '/about' ? (credits.hidden = true) : (credits.hidden = false);
if(location.pathname === '/about'){
    credits.hidden = false;
    pageHeader.hidden = true;
    footerElement.hidden = true;
} else {
    credits.hidden = true;
    pageHeader.hidden = false;
    footerElement.hidden = false;
};


function loadStyle(url) {
    switch (url) {
        case '/': return '/pages/landing.html';
        case '/dark-kitty': return '/pages/dark-kitty.html';
        case '/me-me-me': return '/pages/me-me-me.html';
        case '/sleepy': return '/pages/sleepy.html';
        case '/working-here': return '/pages/working-here.html';
        case '/whiskers': return '/pages/whiskers.html';
        case '/meow': return '/pages/meow.html';
        case '/happy-kitty': return '/pages/happy-kitty.html';
        case '/about': return '/pages/about.html';
        case '/wee': return '/pages/wee.html';
    }
}

function newButton(href, caption) {
    const newButton = document.createElement('a');
    newButton.href = href;
    newButton.innerText = caption;
    return newButton;
}

footer.appendChild(newButton('/', 'Home'))
footer.appendChild(newButton('/dark-kitty', 'Eyes'))
footer.appendChild(newButton('/me-me-me', 'Pick Me'))
footer.appendChild(newButton('/sleepy', 'Sleepy'))
footer.appendChild(newButton('/working-here', 'Busy'))
footer.appendChild(newButton('/wee', 'Wee'))
footer.appendChild(newButton('/whiskers', 'Whiskers'))
footer.appendChild(newButton('/meow', 'Meow'))
footer.appendChild(newButton('/happy-kitty', 'Happy'))
footer.appendChild(newButton('/about', 'About'))


backHome.addEventListener('click',function(ev){
    console.log('ev: ', ev);
    location.pathname="/"
})