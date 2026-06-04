import { createCollectionCard } from '../../../components/section-cards.js'
import { collectionData } from '../../../data/section-data.js'

export function renderCollection() {
	const collection = document.querySelector('.collection__list')

	if (!collection) return

	collection.innerHTML = collectionData
		.map(item => createCollectionCard(item))
		.join('')
}
