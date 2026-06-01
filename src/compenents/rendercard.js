export function renderCard(user) {
  return `
    <div class="card">
      <img src="${user.image}" alt="${user.name}" class="card-img">
      <h3 class="card-title">${user.name}</h3>
      <p class="card-info">${user.info}</p>
    </div>
  `;
}