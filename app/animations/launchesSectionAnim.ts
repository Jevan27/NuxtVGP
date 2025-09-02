// src/animations/launchesSectionAnimations.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface LaunchesSectionElements {
	section: HTMLElement
	header: HTMLElement
	desc: HTMLElement
	button?: HTMLElement
}

export function initLaunchesSectionAnimations({ section, header, desc, button }: LaunchesSectionElements) {
	// Initial state
	gsap.set([header, desc], { opacity: 0, x: -100 })
	if (button) {
		gsap.set(button, { opacity: 0, y: 20 })
	}

	// Scroll animation
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: section,
			start: 'top 80%',
			end: 'bottom 20%',
			scrub: true,
		},
	})

	tl.to(header, {
		x: 0,
		opacity: 1,
		duration: 1,
		ease: 'power3.out',
	}).to(
		desc,
		{
			x: 0,
			opacity: 1,
			duration: 1,
			ease: 'power3.out',
		},
		'-=0.5',
	)

	if (button) {
		tl.to(
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
}
