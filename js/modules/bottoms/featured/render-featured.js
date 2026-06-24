import { createFeaturedCard } from '../../../fleece/components/featured-card.js'
import { featuredData } from '../../../fleece/data/featured-data.js'

export function renderFeatured() {
	const featured = document.querySelector('.featured__list')

	if (!featured) return

	featured.innerHTML = featuredData
		.map(item => createFeaturedCard(item))
		.join('')
}
