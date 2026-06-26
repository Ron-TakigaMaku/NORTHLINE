import { createFeaturedCard } from '../../../accesories/components/featured-card.js'
import { featuredData } from '../../../accesories/data/featured-data.js'

export function renderFeatured() {
	const featured = document.querySelector('.featured__list')

	if (!featured) return

	featured.innerHTML = featuredData
		.map(item => createFeaturedCard(item))
		.join('')
}
