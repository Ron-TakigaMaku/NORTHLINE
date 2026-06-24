import { createCard } from '../../../fleece/components/shop-card.js'
import { shopData } from '../../../fleece/data/shop-data.js'

export const renderShop = () => {
	const container = document.querySelector('.shop__track')
	if (!container) return
	container.innerHTML = shopData.map(createCard).join('')
}
