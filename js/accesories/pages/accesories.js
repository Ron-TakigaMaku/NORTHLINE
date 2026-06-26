import { initFeaturedModal } from '../../modules/accesories/featured/featured-modal.js'
import { renderFeatured } from '../../modules/accesories/featured/render-featured.js'
import { renderHero } from '../../modules/accesories/hero/render-hero.js'
import { initSlider } from '../../modules/accesories/shop/init-slider.js'
import { renderShop } from '../../modules/accesories/shop/render-shop.js'
import { initProductModal } from '../../modules/accesories/shop/shop-modal.js'

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
	renderShop()
	renderFeatured()
	initProductModal()
	initFeaturedModal()
	initRevealAnimation()
	initSlider()
})
