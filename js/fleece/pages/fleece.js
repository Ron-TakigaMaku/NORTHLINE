import { initFeaturedModal } from '../../modules/fleece/featured/featured-modal.js'
import { renderFeatured } from '../../modules/fleece/featured/render-featured.js'
import { renderHero } from '../../modules/fleece/hero/render-hero.js'

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
	renderHero()
	renderFeatured()
	initFeaturedModal()
	initRevealAnimation()
})
