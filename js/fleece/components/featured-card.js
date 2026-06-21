export function createFeaturedCard(item) {
	return `
		<section class="featured-card">
			<div class="featured-card__content">
				<span class="featured-card__number">${item.number}</spa
				<h3 class="featured-card__title">${item.title}</h
				<p class="featured-card__text">${item.text}</p>
				<section class="featured__action">
					<a href="#" class="featured-card__link"> Explore → </a>
				</section>
			</div>

			<div class="featured-card__image">
				<img src="${item.img}" alt="$item.title"/>
			</div>
		</section>
	`
}
