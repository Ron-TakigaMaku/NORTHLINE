import { createHeroCard } from '../../../fleece/components/hero-card.js'
import { heroData } from '../../../fleece/data/hero-data.js'

export function renderHero() {
	const hero = document.querySelector('.hero__list')

	if (!hero) return

	hero.innerHTML = heroData.map(item => createHeroCard(item)).join('')
}
