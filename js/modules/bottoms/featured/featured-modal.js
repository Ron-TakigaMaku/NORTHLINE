import { featuredData } from '../../../bottoms/data/featured-data.js'

function createModalContent(item) {
	return `
    <img src="${item.img}" alt="${item.title}" class="featured-modal__img" />
    <div class="featured-modal__info">
      <span class="featured-modal__number">${item.number}</span>
      <h3 class="featured-modal__title">${item.title}</h3>
      <p class="featured-modal__text">${item.text}</p>
    </div>
  `
}

export function initFeaturedModal() {
	const modal = document.getElementById('featured-modal')
	const body = modal?.querySelector('.featured-modal__body')
	const list = document.querySelector('.featured__list')

	if (!modal || !body || !list) return

	list.addEventListener('click', e => {
		const btn = e.target.closest('[data-id]')
		if (!btn) return

		const id = Number(btn.dataset.id)
		const item = featuredData.find(p => p.id === id)
		if (!item) return

		body.innerHTML = createModalContent(item)
		modal.classList.add('modal--open')
		document.body.style.overflow = 'hidden'
	})

	function closeModal() {
		modal.classList.remove('modal--open')
		document.body.style.overflow = ''
	}

	modal
		.querySelector('.featured-modal__overlay')
		?.addEventListener('click', closeModal)
	modal
		.querySelector('.featured-modal__close')
		?.addEventListener('click', closeModal)
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') closeModal()
	})
}
