import { createValueCard } from '../../components/value-cards.js'
import { valuesData } from '../../data/value-data.js'

export function renderValues() {
	const container = document.querySelector('.values-list')
	if (!container) return

	container.innerHTML = valuesData.map(createValueCard).join('')
}
