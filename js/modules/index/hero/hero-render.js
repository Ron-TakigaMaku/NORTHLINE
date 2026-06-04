import { createHeroCard } from '../../../components/hero-cards.js'
import { heroData } from '../../../data/hero-data.js'
export function renderHero() {
	const hero = document.querySelector('.hero__list')

	if (!hero) return

	hero.innerHTML = heroData.map(item => createHeroCard(item)).join('')
}
