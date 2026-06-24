import { shopData } from '../../../fleece/data/shop-data.js'

function createModalContent(item) {
	const photos = item.image
		.map(
			src => `
    <img src="${src}" alt="${item.title}" class="modal__img" />
  `,
		)
		.join('')

	return `
    <div class="modal__gallery">${photos}</div>
    <p class="modal__brand">${item.brand}</p>
    <h2 class="modal__title">${item.title}</h2>
    <p class="modal__price">${item.price}</p>
    <p class="modal__desc">${item.description}</p>
  `
}

export function initProductModal() {
	const modal = document.getElementById('product-modal')
	const body = modal?.querySelector('.modal__body')
	const track = document.querySelector('.shop__track')

	if (!modal || !body || !track) return

	// Один слушатель на весь трек карусели — event delegation
	track.addEventListener('click', e => {
		const btn = e.target.closest('[data-id]')
		if (!btn) return

		const id = Number(btn.dataset.id)
		const item = shopData.find(p => p.id === id)
		if (!item) return

		body.innerHTML = createModalContent(item)
		modal.classList.add('modal--open')
		document.body.style.overflow = 'hidden'
	})

	function closeModal() {
		modal.classList.remove('modal--open')
		document.body.style.overflow = ''
	}

	modal.querySelector('.modal__overlay')?.addEventListener('click', closeModal)
	modal.querySelector('.modal__close')?.addEventListener('click', closeModal)
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') closeModal()
	})
}
