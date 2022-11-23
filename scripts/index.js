new fullpage('#fullpage', {
    verticalCentered: false,
    autoScrolling: true,
    scrollingSpeed: 850,
    scrollHorizontally: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    menu: true,
    controlArrows: false,
    licenseKey: 'gplv3-license',
    credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },
    onLeave: function (origin, destination, direction, trigger) {
        //!Nav color change on footer Event
        if (origin.index == 2 && direction == 'down') {
            if (darkModeToggle.classList.contains('lightModeToggle')) {
                navLogo.classList.add('light')
                navLogo.classList.remove('dark')
                for (let div of toggleDivs) {
                    div.classList.add('bgLight')
                    div.classList.remove('bgDark')
                }
            } else if (darkModeToggle.classList.contains('darkModeToggle')) {
                navLogo.classList.add('dark')
                navLogo.classList.remove('light')
                for (let div of toggleDivs) {
                    div.classList.add('bgDark')
                    div.classList.remove('bgLight')
                }
            }
        }
        else if (origin.index == 3 && direction == 'up') {
            if (darkModeToggle.classList.contains('lightModeToggle')) {
                navLogo.classList.add('dark')
                navLogo.classList.remove('light')
                for (let div of toggleDivs) {
                    div.classList.add('bgDark')
                    div.classList.remove('bgLight')
                }
            } else if (darkModeToggle.classList.contains('darkModeToggle')) {
                navLogo.classList.add('light')
                navLogo.classList.remove('dark')
                for (let div of toggleDivs) {
                    div.classList.add('bgLight')
                    div.classList.remove('bgDark')
                }
            }
        }
    }
});


//!Variables//

const nav = document.getElementsByTagName('nav')
const navLogo = document.querySelector('nav>span')
const navToggle = document.querySelector('nav>div')
const toggleDivs = document.querySelectorAll('nav>div>div')

const menu = document.getElementById('menu')
const menuLinks = document.querySelectorAll('#menu>div:nth-of-type(1)>ul a')
const contactMenuLink = document.getElementById('contactMenuLink')
const languageToggle = document.getElementById('languageToggle')
const languageOptions = document.querySelectorAll('#languageToggle>a')

const darkModeBtn = document.getElementById('darkModeBtn')
const darkModeToggle = document.getElementById('darkModeToggle')
const darkModeBtnIcon = document.getElementById('darkModeBtnIcon')

//? All text elements with light color > goes dark
const lightTextElements = document.querySelectorAll('.light')

//? All text elements with dark color > goes light
const darkTextElements = document.querySelectorAll('.dark')

//? All text elements with medium color > goes light
const mediumTextElements = document.querySelectorAll('.medium')

//? All elements with bgLight > goes bg-dark
const bgLightElements = document.querySelectorAll('.bgLight')

//? All elements with bgDark > goes bg-dark
const bgDarkElements = document.querySelectorAll('.bgDark')

//? All elements with bgAccent > goes bgAccentDarkMode
const bgAccentElements = document.querySelectorAll('.bgAccent')

//? SlideNav goes to var(--bg-light-color)
const slideNav = document.querySelectorAll('.fp-slidesNav ul li a span')

const menuTextLinks = document.querySelectorAll('div#menu>div:nth-of-type(2) a')
const menuIcons = document.querySelectorAll('div#menu>div:nth-of-type(2)>div>ul>li div')
const footerIcons = document.querySelectorAll('section:nth-of-type(4) ul>li div')
const contactLinks = document.querySelectorAll('section:nth-of-type(4)>div>p>a')


/*

!Events
*/
//Back to Top
navLogo.addEventListener('click', function () {
    if (menu.classList.contains('activeMenu')) {
        menuAnimation()
    }
})
navLogo.addEventListener('click', backToTop)

//Opening the menu
navToggle.addEventListener('click', menuAnimation)
//Closing the menu
menuLinks.forEach(link => {
    link.addEventListener('click', menuAnimation)
})

languageToggle.addEventListener('click', function (e) {
    e.stopPropagation()
    for (let flag of languageOptions) {
        toggleClass(flag, 'noDisplay')
    }
})

window.addEventListener('click', function (e) {
    if (menu.classList.contains('activeMenu')) {
        for (let flag of languageOptions) {
            if (e.target !== flag && !flag.classList.contains('noDisplay')) {
                toggleClass(flag, 'noDisplay')
            }
        }
    }
})

darkModeToggle.addEventListener('click', darkModeEvent)

/*
!Functions
*/

function toggleClass(element, className) {
    element.classList.toggle(className)
}

function menuAnimation() {
    //?Menu Toggle Position
    toggleDivs[0].classList.toggle('activeNavToggle2')
    toggleDivs[1].classList.toggle('activeNavToggle1')
    toggleDivs[2].classList.toggle('activeNavToggle2')
    menu.classList.toggle('activeMenu')
    //?Menu Toggle Color
    for (let div of toggleDivs) {
        div.classList.toggle('bgDark')
        div.classList.toggle('bgAccent')
    }
}

function backToTop() {
    fullpage_api.moveTo(1)
}

//*Dark Mode
function darkModeEvent() {
    lightTextElements.forEach(element => {
        toggleClass(element, 'dark')
        toggleClass(element, 'light')
    })
    darkTextElements.forEach(element => {
        toggleClass(element, 'light')
        toggleClass(element, 'dark')
    })
    mediumTextElements.forEach(element => {
        toggleClass(element, 'light')
        toggleClass(element, 'medium')
    })
    bgLightElements.forEach(element => {
        toggleClass(element, 'bgLight')
        toggleClass(element, 'bgDark')
    })
    bgDarkElements.forEach(element => {
        toggleClass(element, 'bgDark')
        toggleClass(element, 'bgLight')
    })
    slideNav.forEach(element => {
        if (element.style.background === "var(--bg-light-color)") {
            element.style.background = "var(--bg-dark-color)"
        } else {
            element.style.background = "var(--bg-light-color)"
        }
    })
    toggleClass(darkModeToggle, 'lightModeToggle')
    toggleClass(darkModeToggle, 'darkModeToggle')

    toggleClass(darkModeBtn, 'lightModeBtnPosition')
    toggleClass(darkModeBtn, 'darkModeBtnPosition')

    toggleClass(darkModeBtnIcon, 'lightModeBtnIcon')
    toggleClass(darkModeBtnIcon, 'darkModeBtnIcon')
}

//Clicking in the contact link in the menu makes the nav change color since it takes the user to the footer
contactMenuLink.addEventListener('click', function () {
    if (darkModeToggle.classList.contains('lightModeToggle')) {
        navLogo.classList.add('light')
        navLogo.classList.remove('dark')
        for (let div of toggleDivs) {
            div.classList.add('bgLight')
            div.classList.remove('bgDark')
        }
    } else if (darkModeToggle.classList.contains('darkModeToggle')) {
        navLogo.classList.add('dark')
        navLogo.classList.remove('light')
        for (let div of toggleDivs) {
            div.classList.add('bgDark')
            div.classList.remove('bgLight')
        }
    }
})

//!Hover Styles
//? Menu Section > Email hover
for (const link of menuTextLinks) {
    link.addEventListener('mouseenter', (e) => {
        toggleClass(link, 'light')
        toggleClass(link, 'dark')
    });
    link.addEventListener('mouseleave', (e) => {
        toggleClass(link, 'light')
        toggleClass(link, 'dark')
    })
}
//? Menu Section > icons hover
menuIcons.forEach(icon => {
    icon.addEventListener('mouseenter', (e) => {
        toggleClass(icon, 'bgLight')
        toggleClass(icon, 'bgDark')
    })
    icon.addEventListener('mouseleave', (e) => {
        toggleClass(icon, 'bgLight')
        toggleClass(icon, 'bgDark')
    })
})

//? Last Section > Email hover
for (let link of contactLinks) {
    link.addEventListener('mouseenter', (e) => {
        toggleClass(link, 'light')
        toggleClass(link, 'dark')
    })
    link.addEventListener('mouseleave', (e) => {
        toggleClass(link, 'light')
        toggleClass(link, 'dark')
    })
}
//? Last Section > icons hover
footerIcons.forEach(icon => {
    icon.addEventListener('mouseenter', (e) => {
        toggleClass(icon, 'bgLight')
        toggleClass(icon, 'bgDark')
    })
    icon.addEventListener('mouseleave', (e) => {
        toggleClass(icon, 'bgLight')
        toggleClass(icon, 'bgDark')
    })
})