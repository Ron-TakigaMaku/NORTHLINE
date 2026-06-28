import { createFeaturedCard } from '../../../footwear/components/featured-card.js'
import { featuredData } from '../../../footwear/data/featured-data.js'

export function renderFeatured() {
	const featured = document.querySelector('.featured__list')

	if (!featured) return

	featured.innerHTML = featuredData
		.map(item => createFeaturedCard(item))
		.join('')
}
