export function createCollectionCard(item) {
	return `
		<section class="collection__content">
      <div class="collection__img">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <h1 class="collection__title">${item.title}</h1>
      <p class="collection__text">${item.description}</p>
      <section class="collection-actions">
        <a href="#story" class="btn">Details</a>
      </section>
    </section>
	`
}
