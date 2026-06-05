// js/modules/index/modal/product-modal.js
import { aboutData } from '../../../index/data/about-data.js'

function createModalContent(item) {
	return `
    <img src="${item.img}" alt="${item.title}" class="modal__img" />
    <p class="modal__brand">${item.brand}</p>
    <h2 class="modal__title">${item.title}</h2>
    <p class="modal__price">${item.price}</p>
    <p class="modal__desc">${item.description}</p>
  `
}

export function initProductModal() {
	const modal = document.getElementById('product-modal')
	const body = modal?.querySelector('.modal__body')
	const track = document.querySelector('.about__track')

	if (!modal || !body || !track) return

	// Один слушатель на весь трек карусели — event delegation
	track.addEventListener('click', e => {
		const btn = e.target.closest('[data-id]')
		if (!btn) return

		const id = Number(btn.dataset.id)
		const item = aboutData.find(p => p.id === id)
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
