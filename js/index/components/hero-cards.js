export function createHeroCard(item) {
	return `
    <section class="hero__content">
      <div class="hero__img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <h1 class="hero__title">${item.title}</h1>
      <p class="hero__text">${item.description}</p>
      <section class="hero-actions">
        <a href="#story" class="btn">Discover Our Story ↓</a>
      </section>
    </section>
  `
}
