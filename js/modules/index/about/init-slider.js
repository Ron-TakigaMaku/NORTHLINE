let idx = 0

export const initSlider = () => {
	const track = document.querySelector('.about__track')
	const dotsEl = document.querySelector('.about__dots')
	const counter = document.querySelector('.about__counter')
	const slides = track.querySelectorAll('.product-card')
	const n = slides.length

	let autoScrollTimer

	slides.forEach((_, i) => {
		const dot = document.createElement('button')
		dot.className = 'about__dot' + (i === 0 ? ' active' : '')
		dot.setAttribute('aria-label', 'Слайд ' + (i + 1))
		dot.onclick = () => {
			clearInterval(autoScrollTimer)
			go(i)
			startAutoScroll()
		}
		dotsEl.appendChild(dot)
	})

	const startAutoScroll = () => {
		clearInterval(autoScrollTimer)
		autoScrollTimer = setInterval(() => {
			go(idx + 1)
		}, 3000)
	}

	const go = i => {
		idx = (i + n) % n
		track.style.transform = `translateX(-${idx * 100}%)`
		dotsEl
			.querySelectorAll('.about__dot')
			.forEach((d, j) => d.classList.toggle('active', j === idx))
		if (counter) counter.textContent = `${idx + 1} / ${n}`
	}

	document.querySelector('.about__next').onclick = () => {
		clearInterval(autoScrollTimer)
		go(idx + 1)
		startAutoScroll()
	}

	document.querySelector('.about__prev').onclick = () => {
		clearInterval(autoScrollTimer)
		go(idx - 1)
		startAutoScroll()
	}

	startAutoScroll()
}
