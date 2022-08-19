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
        let leavingSection = this;

        //!Nav color change on footer Event
        if (origin.index == 2 && direction == 'down') {
            if (darkModeToggle.classList.contains('lightModeToggle')) {
                navLogo.classList.add('light')
                navLogo.classList.remove('dark')
                for (let div of toggleDiv) {
                    div.classList.add('bgLight')
                    div.classList.remove('bgDark')
                }
            } else if (darkModeToggle.classList.contains('darkModeToggle')) {
                navLogo.classList.add('dark')
                navLogo.classList.remove('light')
                for (let div of toggleDiv) {
                    div.classList.add('bgDark')
                    div.classList.remove('bgLight')
                }
            }
        }
        else if (origin.index == 3 && direction == 'up') {
            if (darkModeToggle.classList.contains('lightModeToggle')) {
                navLogo.classList.add('dark')
                navLogo.classList.remove('light')
                for (let div of toggleDiv) {
                    div.classList.add('bgDark')
                    div.classList.remove('bgLight')
                }
            } else if (darkModeToggle.classList.contains('darkModeToggle')) {
                navLogo.classList.add('light')
                navLogo.classList.remove('dark')
                for (let div of toggleDiv) {
                    div.classList.add('bgLight')
                    div.classList.remove('bgDark')
                }
            }
        }
    }
});


/*


!Functions


*/
function menuAnimation() {
    //?Menu Toggle Position
    toggleDiv[0].classList.toggle('activeNavToggle2')
    toggleDiv[1].classList.toggle('activeNavToggle1')
    toggleDiv[2].classList.toggle('activeNavToggle2')
    menu.classList.toggle('activeMenu')
    //?Menu Toggle Color
    for (let div of toggleDiv) {
        div.classList.toggle('bgDark')
        div.classList.toggle('bgAccent')
    }
}


/*


!Events


*/

const nav = document.getElementById('nav')
const navLogo = document.getElementById('navLogo')
const navToggle = document.getElementById('navToggle')
const toggleDiv = document.getElementsByClassName('toggleDiv')

//!Back to Top
const menu = document.getElementById('menu')
navLogo.addEventListener('click', function() {
    if (menu.classList.contains('activeMenu')) {
        menuAnimation()
    }
})

navLogo.addEventListener('click', backToTop)
function backToTop() {
    fullpage_api.moveTo(1)
}


//!Opening the menu
navToggle.addEventListener('click', menuAnimation)

//!Closing the menu
const menuLinks = document.querySelectorAll('#menu>div:nth-of-type(1)>ul a')
menuLinks.forEach(link => {
    link.addEventListener('click', menuAnimation)
})


//!Dark Mode
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

darkModeToggle.addEventListener('click', darkModeEvent)
function darkModeEvent() {
    lightTextElements.forEach(element => {
        element.classList.toggle('dark')
        element.classList.toggle('light')
    });

    darkTextElements.forEach(element => {
        element.classList.toggle('light')
        element.classList.toggle('dark')
    });

    mediumTextElements.forEach(element => {
        element.classList.toggle('light')
        element.classList.toggle('medium')
    })

    bgLightElements.forEach(element => {
        element.classList.toggle('bgLight')
        element.classList.toggle('bgDark')
    })

    bgDarkElements.forEach(element => {
        element.classList.toggle('bgDark')
        element.classList.toggle('bgLight')
    })

    slideNav.forEach(element => {
        if (element.style.background === "var(--bg-light-color)") {
            element.style.background = "var(--bg-dark-color)"
        } else {
            element.style.background = "var(--bg-light-color)"
        }
    })

    darkModeToggle.classList.toggle('lightModeToggle')
    darkModeToggle.classList.toggle('darkModeToggle')

    darkModeBtn.classList.toggle('lightModeBtnPosition')
    darkModeBtn.classList.toggle('darkModeBtnPosition')

    darkModeBtnIcon.classList.toggle('lightModeBtnIcon')
    darkModeBtnIcon.classList.toggle('darkModeBtnIcon')
}

//!Clicking in the contact link in the menu makes the nav change color since it takes the user to the footer
const menuContact = document.getElementById('contactAnchor')
menuContact.addEventListener('click', function() {
    if (darkModeToggle.classList.contains('lightModeToggle')) {
        navLogo.classList.add('light')
        navLogo.classList.remove('dark')
        for (let div of toggleDiv) {
            div.classList.add('bgLight')
            div.classList.remove('bgDark')
        }
    } else if (darkModeToggle.classList.contains('darkModeToggle')) {
        navLogo.classList.add('dark')
        navLogo.classList.remove('light')
        for (let div of toggleDiv) {
            div.classList.add('bgDark')
            div.classList.remove('bgLight')
        }
    }
})

//!Hover Styles
//? Menu Section > Email hover
const menuEmail = document.querySelector('div#menu>div:nth-of-type(2) a')
menuEmail.addEventListener('mouseenter', (event) => {
    if (menuEmail.classList.contains('light')) {
        menuEmail.classList.toggle('light')
        menuEmail.classList.toggle('dark')
    } else {
        menuEmail.classList.toggle('light')
        menuEmail.classList.toggle('dark')
    }
});
menuEmail.addEventListener('mouseleave', (event) => {
    if (menuEmail.classList.contains('light')) {
        menuEmail.classList.toggle('light')
        menuEmail.classList.toggle('dark')
    } else {
        menuEmail.classList.toggle('light')
        menuEmail.classList.toggle('dark')
    }
})
//? Menu Section > icons hover
const menuIcons = document.querySelectorAll('div#menu>div:nth-of-type(2)>div>ul>li div')
menuIcons.forEach(icon => {
    icon.addEventListener('mouseenter', (e) => {
        if (icon.classList.contains('bgLight')) {
            icon.classList.toggle('bgLight')
            icon.classList.toggle('bgDark')
        } else {
            icon.classList.toggle('bgLight')
            icon.classList.toggle('bgDark')
        }
    })
    icon.addEventListener('mouseleave', (e) => {
        if (icon.classList.contains('bgLight')) {
            icon.classList.toggle('bgLight')
            icon.classList.toggle('bgDark')
        } else {
            icon.classList.toggle('bgLight')
            icon.classList.toggle('bgDark')
        }
    })
})

//? Last Section > Email hover
const footerEmail = document.querySelector('section:nth-of-type(4)>div>p>a')
footerEmail.addEventListener('mouseenter', (event) => {
    if (footerEmail.classList.contains('light')) {
        footerEmail.classList.toggle('light')
        footerEmail.classList.toggle('dark')
    } else {
        footerEmail.classList.toggle('light')
        footerEmail.classList.toggle('dark')
    }
});
footerEmail.addEventListener('mouseleave', (event) => {
    if (footerEmail.classList.contains('light')) {
        footerEmail.classList.toggle('light')
        footerEmail.classList.toggle('dark')
    } else {
        footerEmail.classList.toggle('light')
        footerEmail.classList.toggle('dark')
    }
})
//? Last Section > icons hover
const footerIcons = document.querySelectorAll('section:nth-of-type(4) ul>li div')
footerIcons.forEach(icon => {
    icon.addEventListener('mouseenter', (e) => {
        if (icon.classList.contains('bgLight')) {
            icon.classList.toggle('bgLight')
            icon.classList.toggle('bgDark')
        } else {
            icon.classList.toggle('bgLight')
            icon.classList.toggle('bgDark')
        }
    })
    icon.addEventListener('mouseleave', (e) => {
        if (icon.classList.contains('bgLight')) {
            icon.classList.toggle('bgLight')
            icon.classList.toggle('bgDark')
        } else {
            icon.classList.toggle('bgLight')
            icon.classList.toggle('bgDark')
        }
    })
})