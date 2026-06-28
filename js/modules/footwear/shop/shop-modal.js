import { shopData } from '../../../footwear/data/shop-data.js'

function createModalContent(item) {
	const slides = item.image
		.map(
			(src, i) => `
      <img
        src="${src}"
        alt="${item.title}"
        class="modal__slide${i === 0 ? ' modal__slide--active' : ''}"
      />
    `,
		)
		.join('')

	const dots = item.image
		.map(
			(_, i) => `
      <button class="modal__dot${i === 0 ? ' modal__dot--active' : ''}" data-index="${i}"></button>
    `,
		)
		.join('')

	return `
    <div class="modal__gallery">
      <button class="modal__arrow modal__arrow--prev">←</button>
      <div class="modal__slides">${slides}</div>
      <button class="modal__arrow modal__arrow--next">→</button>
      <div class="modal__dots">${dots}</div>
    </div>
    <div class="modal__info">
      <p class="modal__brand">${item.brand}</p>
      <h2 class="modal__title">${item.title}</h2>
      <p class="modal__price">${item.price}</p>
      <p class="modal__desc">${item.description}</p>
    </div>
  `
}

function initCarousel(modal) {
	const slides = modal.querySelectorAll('.modal__slide')
	const dots = modal.querySelectorAll('.modal__dot')
	let current = 0

	function goTo(index) {
		slides[current].classList.remove('modal__slide--active')
		dots[current].classList.remove('modal__dot--active')
		current = (index + slides.length) % slides.length
		slides[current].classList.add('modal__slide--active')
		dots[current].classList.add('modal__dot--active')
	}

	modal
		.querySelector('.modal__arrow--prev')
		?.addEventListener('click', () => goTo(current - 1))
	modal
		.querySelector('.modal__arrow--next')
		?.addEventListener('click', () => goTo(current + 1))
	dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)))
}

export function initProductModal() {
	const modal = document.getElementById('product-modal')
	const body = modal?.querySelector('.modal__body')
	const track = document.querySelector('.shop__track')

	if (!modal || !body || !track) return

	track.addEventListener('click', e => {
		const btn = e.target.closest('[data-id]')
		if (!btn) return

		const id = Number(btn.dataset.id)
		const item = shopData.find(p => p.id === id)
		if (!item) return

		body.innerHTML = createModalContent(item)
		initCarousel(modal)
		modal.classList.add('modal--open')
		document.body.style.overflow = 'hidden'
	})

	function closeModal() {
		modal.classList.remove('modal--open')
		document.body.style.overflow = ''
	}

	modal.querySelector('.modal__overlay')?.addEventListener('click', closeModal)
	modal.querySelector('.modal__close')?.addEventListener('click', closeModal)
}
