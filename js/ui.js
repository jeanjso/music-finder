export function renderResults(container, tracks) {
  container.innerHTML = "";
  const PLACEHOLDER = "https://via.placeholder.com/300?text=Sin+carátula";

  tracks.forEach((track) => {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const artist = document.createElement("p");
    const album = document.createElement("p");
    const artwork = document.createElement("img");

    const artworkUrl = track.artwork ? track.artwork.replace('100x100','300x300') : PLACEHOLDER;

    title.textContent = track.title;
    artist.textContent = track.artist;
    album.textContent = track.album;

    artwork.src = artworkUrl;
    artwork.alt = track.title;


    card.appendChild(title);
    card.appendChild(artist);
    card.appendChild(album);
    card.appendChild(artwork);
    container.appendChild(card);
  });
}
// \

