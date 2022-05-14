
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
const menuContainer = document.getElementsByClassName('mobile-menu')[0];
console.log('btnDiv: ', footer);
console.log('frame: ', frame);

frame.src = loadStyle(location.pathname);

if(window.isMobile){
    console.log('is desktop');
    desktopFooter.remove();
} else { 
    console.log('is mobile');
    mobileFooter.remove();
    menuContainer.remove();
}

let menuStateOpen = false;
footerElement.addEventListener('click',()=>{
    console.log('click');
    // mobileMenu.classList.add('slide-in');
    
    
    if(menuStateOpen){
        
        menuStateOpen = false;
        // menuContainer.style.marginLeft = '100%'
        menuContainer.classList.add('slide-out');
        
        setTimeout(()=>{
            menuContainer.classList.remove('slide-in');
        },1000)
        

    } else {
        
        menuStateOpen = true;
        // menuContainer.style.marginLeft = '-100%'
        menuContainer.classList.add('slide-in');
        
        setTimeout(()=>{
            menuContainer.classList.remove('slide-out');
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
        case '/': return '/src/pages/landing.html';
        case '/dark-kitty': return '/src/pages/dark-kitty.html';
        case '/me-me-me': return '/src/pages/me-me-me.html';
        case '/sleepy': return '/src/pages/sleepy.html';
        case '/working-here': return '/src/pages/working-here.html';
        case '/whiskers': return '/src/pages/whiskers.html';
        case '/meow': return '/src/pages/meow.html';
        case '/happy-kitty': return '/src/pages/happy-kitty.html';
        case '/about': return '/src/pages/about.html';
        case '/wee': return '/src/pages/wee.html';
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
