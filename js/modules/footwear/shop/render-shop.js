import { createCard } from '../../../footwear/components/shop-card.js'
import { shopData } from '../../../footwear/data/shop-data.js'

export const renderShop = () => {
	const container = document.querySelector('.shop__track')
	if (!container) return
	container.innerHTML = shopData.map(createCard).join('')
}
