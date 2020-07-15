import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Modal } from "bootstrap"

gsap.registerPlugin(ScrollTrigger);

fixFeatIconSize();

window.addEventListener('resize', () => {
    fixFeatIconSize();
})

function fixFeatIconSize() {
    const featIcons = document.querySelectorAll('.our-features .icons .icon-container .main');

    featIcons.forEach(featIcon => {
        const width = featIcon.offsetWidth;
        featIcon.style.height = `${width}px`;
    })
}

const hero_animation = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section",
        toggleActions: "play complete restart complete"
    }
});
hero_animation.from('.hero-section .hero-img img', {x: -500, duration: 1, ease: 'power.in'})
            .to('.hero-section .hero-content > h1 span', {fontWeight: 700, duration: 0.1, ease: "power3.out"})
            .to('.hero-section .hero-content > h1 span', {background: "#1C4B58", color: "#fff", duration: 0.5, delay: 0.5, ease: "power3.out"})
            .to('.hero-section .hero-content > h1 span', {padding: "0 10px", duration: 0.3, ease: "expo.in"})
            .to('.hero-section .hero-content > h1 span', {borderRadius: "6px", duration: 0.2, ease: "power3.out"})
            .to('.hero-section .hero-content > h1 span', {lineHeight: 2, duration: 1, ease: "power3.out"})
            .to('.hero-section .hero-content > h1 span', {letterSpacing: "4px", duration: 2, ease: "elastic.out(1, 0.3)"})


gsap.from('.quick-contact button i', {scale: 0.5, color: '#1d4e5b', ease: "elastic.easeOut", repeat: -1, repeatDelay: 2})

function showQuickContactBtn() {
    const scrollBarPos = window.scrollY;
    const quickContact = document.querySelector('.quick-contact')
    
    if(scrollBarPos > 200) {
        quickContact.classList.add('show')
    }else {
        quickContact.classList.remove('show')
    }
}

window.addEventListener('scroll', () => {
    showQuickContactBtn();
})

function homepageSlider() {
    let heroSection = document.querySelector('.hero-section')
    const slides = heroSection.querySelectorAll('#homepage-slider .slide-item')
    const slideLength = slides.length;
    let currentSlide = 0;
    let scrolling = false;

    slides[0].classList.add('active')
    hero_animation.restart()

    heroSection.addEventListener('wheel', (event) => {
        event.preventDefault();
        const delta = Math.sign(event.deltaY);

        if(scrolling === false) {
            scrolling = true

            if(delta > 0) {
                if((currentSlide + 1) < slideLength) {
    
                    slides.forEach(slide => {
                        slide.classList.remove('active')
                    })
    
                    slides[++currentSlide].classList.add('active')
                    hero_animation.restart()
                }
            }else {
                if(currentSlide > 0) {
                    slides.forEach(slide => {
                        slide.classList.remove('active')
                    })
    
                    slides[--currentSlide].classList.add('active')
                    hero_animation.restart()
                }
            }

            setTimeout(() => {
                scrolling = false
            }, 250)
        }
    })
}

homepageSlider();
