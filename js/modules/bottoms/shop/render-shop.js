import { createCard } from '../../../bottoms/components/shop-card.js'
import { shopData } from '../../../bottoms/data/shop-data.js'

export const renderShop = () => {
	const container = document.querySelector('.shop__track')
	if (!container) return
	container.innerHTML = shopData.map(createCard).join('')
}
