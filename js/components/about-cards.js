export const createCard = product => `
	<article class="product-card">
	  <div class="product-card__img">
	    <img src="${product.img}" alt="${product.title}">
	  </div>
	  <div class="product-card__info">
	    <p class="product-card__brand">${product.brand}</p>
	    <h3 class="product-card__title">${product.title}</h3>
	    <p class="product-card__price">${product.price}</p>
	    <p class="product-card__desc">${product.description}</p>
	    <a class="product-card__link" href="${product.linkUrl}">${product.linkText}	</a>
	  </div>
	</article>
`
