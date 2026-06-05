import { createCard } from '../../../index/components/about-cards.js'
import { aboutData } from '../../../index/data/about-data.js'

export const renderAbout = () => {
	const container = document.querySelector('.about__track')
	if (!container) return
	container.innerHTML = aboutData.map(createCard).join('')
}
