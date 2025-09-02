// src/animations/heroAnimations.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface HeroElements {
	title: HTMLElement
	subtitle: HTMLElement
	content: HTMLElement
}

export function initHeroAnimations({ title, subtitle, content }: HeroElements) {
	// Intro animation
	const intro = gsap.timeline()
	intro.from(title, {
		y: 80,
		opacity: 0,
		duration: 1.2,
		ease: 'power4.out',
	})
	intro.from(
		subtitle,
		{
			y: 40,
			opacity: 0,
			duration: 1,
			ease: 'power2.out',
		},
		'-=0.6',
	)

	// Scroll animation
	gsap.timeline({
		scrollTrigger: {
			trigger: content,
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	})
		.fromTo(title, { y: 0, opacity: 1 }, { y: -80, opacity: 0, ease: 'power4.out' })
		.fromTo(subtitle, { y: 0, opacity: 1 }, { y: -40, opacity: 0, ease: 'power2.out' }, '-=0.6')
}
