import { createHeroCard } from '../../../bottoms/components/hero-card.js'
import { heroData } from '../../../bottoms/data/hero-data.js'

export function renderHero() {
	const hero = document.querySelector('.hero__list')

	if (!hero) return

	hero.innerHTML = heroData.map(item => createHeroCard(item)).join('')
}
