export function createAboutCards(item, index) {
	return `
		<div class="about__project reveal about__project-${index + 1}">
			<div class="about__content">
				<h2 class="about__subtitle">${item.title}</h2>
				<p class="about__text">${item.description}</p>
				<a href="${item.linkUrl}" class="about__link">${item.linkText}</a>
			</div>
			<div class="about__photo">
				<img src="${item.img}" alt="${item.title}" />
			</div>
		</div>
	`
}
