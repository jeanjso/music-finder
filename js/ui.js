export function renderResults(container, tracks) {
  container.innerHTML = "";

  tracks.forEach((track) => {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = track.title;
    card.appendChild(title);
    container.appendChild(card);
  });
}
// \

