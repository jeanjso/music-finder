const ITUNES_BASE_URL = "https://itunes.apple.com/search";

function mapTrack(raw) {
  return {
    id: raw.trackId,
    title: raw.trackName,
    artist: raw.artistName,
    album: raw.collectionName,
    artwork: raw.artworkUrl100,
    preview: raw.previewUrl,
  };
}

export async function searchMusic(query) {
  if (!query || !query.trim()) {
    return { ok: false, error: "La búsqueda no puede estar vacía" };
  }

  try {
    const encoded = encodeURIComponent(query.trim());
    const url = `${ITUNES_BASE_URL}?term=${encoded}&media=music&limit=20`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();

    if (!Array.isArray(data.results)) {
      throw new Error("Respuesta inesperada de iTunes");
    }
    const tracks = data.results.map(mapTrack);

    return { ok: true, data: tracks };
  } catch (error) {
    console.error("Error en searchMusic:", error);
    return { ok: false, error: "No se pudo completar la búsqueda" };
  }
}


