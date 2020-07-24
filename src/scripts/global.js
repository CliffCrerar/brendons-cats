
const frame = document.getElementById('frame');
const footer = document.getElementsByTagName('footer')[0];
console.log('btnDiv: ', footer);
console.log('frame: ', frame);

frame.src=loadStyle(location.pathname);

function loadStyle(url){
    switch(url){
        case '/': return '/pages/landing.html';
        case '/dark-kitty': return '/pages/dark-kitty.html';
        case '/me-me-me': return '/pages/me-me-me.html';
        case '/sleepy': return '/pages/sleepy.html';
        case '/working-here': return '/pages/working-here.html';
        case '/whiskers': return '/pages/whiskers.html';
        case '/meow': return '/pages/meow.html';
        case '/happy-kitty': return '/pages/happy-kitty.html';
        case '/about': return '/pages/about.html';
    }
}

function newButton(href, caption){
    const newButton = document.createElement('a');
    newButton.href=href;
    newButton.innerText = caption;
    return newButton;
}

footer.appendChild(newButton('/','home'))
footer.appendChild(newButton('/dark-kitty','Eyes'))
footer.appendChild(newButton('/me-me-me','Pick Me'))
footer.appendChild(newButton('/sleepy','Sleepy'))
footer.appendChild(newButton('/working-here','Busy'))
footer.appendChild(newButton('/whiskers','Whiskers'))
footer.appendChild(newButton('/meow','Meow'))
footer.appendChild(newButton('/happy-kitty','Happy'))
footer.appendChild(newButton('/about','About'))
