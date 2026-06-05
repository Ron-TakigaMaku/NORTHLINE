export function createValueCard(item) {
	return `
    <li class="value-item">
      <div class="value-num">${item.num}</div>
      <div class="value-text">
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </div>
    </li>
  `
}
