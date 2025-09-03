// src/animations/rocketSectionAnimations.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RocketSectionElements {
	section: HTMLElement
	header: HTMLElement
	desc: HTMLElement
	button: HTMLElement | null
}

export function initRocketSectionAnimations({ section, header, desc, button }: RocketSectionElements) {
	// Start elements off-screen to the right
	gsap.set([header, desc], { opacity: 0, x: 100 })
	gsap.set(button, { opacity: 0, y: 20 })

	// Timeline tied to scroll
	gsap.timeline({
		scrollTrigger: {
			trigger: section,
			start: 'top 80%',
			end: 'bottom 20%',
			scrub: true,
		},
	})
		.to(header, {
			x: 0,
			opacity: 1,
			duration: 1,
			ease: 'power3.out',
		})
		.to(
			desc,
			{
				x: 0,
				opacity: 1,
				duration: 1,
				ease: 'power3.out',
			},
			'-=0.5',
		)
		.to(
			button,
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
			},
			'-=0.3',
		)
}
