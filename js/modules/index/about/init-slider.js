let idx = 0

export const initSlider = () => {
	const track = document.querySelector('.about__track')
	const dotsEl = document.querySelector('.about__dots')
	const counter = document.querySelector('.about__counter')
	const slides = track.querySelectorAll('.product-card')
	const n = slides.length

	slides.forEach((_, i) => {
		const dot = document.createElement('button')
		dot.className = 'about__dot' + (i === 0 ? ' active' : '')
		dot.setAttribute('aria-label', 'Слайд ' + (i + 1))
		dot.onclick = () => go(i)
		dotsEl.appendChild(dot)
	})

	const go = i => {
		idx = (i + n) % n
		track.style.transform = `translateX(-${idx * 100}%)`
		dotsEl
			.querySelectorAll('.about__dot')
			.forEach((d, j) => d.classList.toggle('active', j === idx))
		counter.textContent = `${idx + 1} / ${n}`
	}

	document.querySelector('.about__next').onclick = () => go(idx + 1)
	document.querySelector('.about__prev').onclick = () => go(idx - 1)
}
