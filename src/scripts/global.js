
const frame = document.getElementById('frame');
const footer = document.getElementById('page-links');
const footerElement = document.getElementsByTagName('footer')[0];
const credits = document.getElementById('about-container');
const pageHeader = document.getElementById('page-header-title');
const backHome = document.getElementById('back-home');
const loader = document.getElementById('loading');
const anchors = document.getElementsByTagName('a');
const desktopFooter = document.getElementById('desktop-footer');
const mobileFooter = document.getElementById('mobile-footer');
const mobileMenu = document.getElementById('mobileMenu');
console.log('btnDiv: ', footer);
console.log('frame: ', frame);

frame.src = loadStyle(location.pathname);

if(window.isMobile){
    console.log('is desktop');
    desktopFooter.remove();
} else { 
    console.log('is mobile');
    mobileFooter.remove()
}

let menuStateOpen = false;
footerElement.addEventListener('click',()=>{
    console.log('click');
    // mobileMenu.classList.add('slide-in');
    const menu = document.getElementsByClassName('mobile-menu')[0];
    
    if(menuStateOpen){
        
        menuStateOpen = false;
        menu.classList.add('slide-out');
        menu.classList.remove('slide-in');
        setTimeout(()=>{
            
        },1000)
        

    } else {
        
        menuStateOpen = true;
        menu.classList.add('slide-in');
        menu.classList.remove('slide-out');
        setTimeout(()=>{
            
        },1000)
        
    }
})


// location.href === '/about' ? (credits.hidden = true) : (credits.hidden = false);
if (location.pathname === '/about') {
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

const menuButtons = [
    ['/', 'Home'],
    ['/dark-kitty', 'Eyes'],
    ['/me-me-me', 'Pick Me'],
    ['/sleepy', 'Sleepy'],
    ['/working-here', 'Busy'],
    ['/wee', 'Wee'],
    ['/whiskers', 'Whiskers'],
    ['/meow', 'Meow'],
    ['/happy-kitty', 'Happy'],
    ['/about', 'About']
].forEach(a=>{
    if(window.isMobile){
        mobileMenu.appendChild(newButton(a[0], a[1]));
    } else {
        footer.appendChild(newButton(a[0], a[1]))
    }
})


backHome.addEventListener('click', function (ev) {
    location.pathname = "/"
})

for(let i=0;i<anchors.length;i++){
    var anchor = anchors[i];
    if(anchor.href.toString() == location.href.toString()){
        // console.log('anchor: ', anchor);
        anchor.classList.add('selected')
    }
    anchor.addEventListener('click', ev => {
        fadeInLoader()
        ev.preventDefault();
        const newHref=ev.target.href.replace(origin,'')
        setCurrentPage(newHref);
        setTimeout(() => {
            location.pathname = newHref;
        }, 1000)
    })
}

frame.onload = function(){
    setTimeout(()=>fadeOutLoader(),500);
}

function fadeInLoader(){
    loader.classList.add('fade-in');
    loader.classList.remove('fade-out');
}

function fadeOutLoader(){
    loader.classList.add('fade-out');
    loader.classList.remove('fade-in');
}

function setCurrentPage(href){
    localStorage.setItem('href',href);
}

function getCurrentPage() {
    return localStorage.getItem('href')
}

function transferMobileMenu(){
    
    
}