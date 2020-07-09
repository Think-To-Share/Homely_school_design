import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
hero_animation.to('.hero-section .hero-content > h1 span', {fontWeight: 700, duration: 0.1, ease: "power3.out"})
            .to('.hero-section .hero-content > h1 span', {background: "#1C4B58", color: "#fff", duration: 0.5, delay: 0.5, ease: "power3.out"})
            .to('.hero-section .hero-content > h1 span', {padding: "0 10px", duration: 0.3, ease: "expo.in"})
            .to('.hero-section .hero-content > h1 span', {borderRadius: "6px", duration: 0.2, ease: "power3.out"})
            .to('.hero-section .hero-content > h1 span', {lineHeight: 2, duration: 1, ease: "power3.out"})
            .to('.hero-section .hero-content > h1 span', {letterSpacing: "4px", duration: 2, ease: "elastic.out(1, 0.3)"})
