import { createAboutCards } from '../../../components/about-cards.js'
import { aboutData } from '../../../data/about-data.js'
export function renderAbout() {
	const aboutList = document.querySelector('.about__list')
	if (!aboutList) return
	aboutList.innerHTML = aboutData.map(createAboutCards).join('')
}
