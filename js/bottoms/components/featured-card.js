export function createFeaturedCard(item) {
	return `
    <section class="featured-card reveal">
      <div class="featured-card__content">
        <span class="featured-card__number">${item.number}</span>
        <h3 class="featured-card__title">${item.title}</h3>
        <p class="featured-card__text">${item.text}</p>
        <section class="featured__action">
          <button class="featured-card__link" data-id="${item.id}">Explore →</button>
        </section>
      </div>

      <div class="featured-card__image">
        <img src="${item.img}" alt="${item.title}" />
      </div>
    </section>
  `
}
