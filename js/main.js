
const anchors = document.querySelectorAll('[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault()

        const blockID = anchor.getAttribute("href").substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
})

/* =======================================================================================  */

const navList = document.querySelector(".header__list-menu")
const burgerMenu = document.querySelector(".header__burger")
const html = document.querySelector('html')

burgerMenu.addEventListener('click', openBurger)

function openBurger(){
    navList.classList.toggle('open-menu')
    burgerMenu.classList.toggle('active')
    html.classList.toggle("unscroll")
}

/* ============================================================================  */

navList.querySelectorAll(".header__link").forEach(link => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("active")
      navList.classList.remove("open-menu")
      html.classList.remove("unscroll")
    })
  })

/* ============================================================================  */

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });



/* ===========================================================================  */
 
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}


ScrollReveal().reveal(".top__title", {
    ...scrollRevealOption,
})

ScrollReveal().reveal(".top__subtile", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".top__text", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".topp__link", {
    ...scrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal(".about__item", {
    ...scrollRevealOption,
    interval: 500,
    distance: "0",
})

ScrollReveal().reveal(".trainers__item", {
    ...scrollRevealOption,
    interval: 500,
})

/* ==========================================================================================  */

const animItems = document.querySelectorAll('.blog__item')

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight  / animStart
            }

            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active')
            }else{
                if (!animItem.classList.contains('anim-no-haight')){
                    animItem.classList.remove('active')
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect()
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

/* ==========================================================================================  */

