import { initSlider } from '../modules/index/about/init-slider.js'
import { renderAbout } from '../modules/index/about/render-about.js'
import { renderHero } from '../modules/index/hero/hero-render.js'
import { renderCollection } from '../modules/index/section/render-section.js'

function initRevealAnimation() {
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in')

					observer.unobserve(entry.target)
				}
			})
		},
		{
			threshold: 0.15,
		},
	)

	document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

document.addEventListener('DOMContentLoaded', () => {
	renderAbout()
	renderHero()
	renderCollection()
	initRevealAnimation()
	initSlider()
})
