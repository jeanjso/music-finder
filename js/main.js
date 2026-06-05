import { searchMusic } from "./api.js";
import { renderResults } from "./ui.js";

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const results = document.querySelector("#results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    return;
  }

  const result = await searchMusic(query);

  if (result.ok){
      renderResults(results, result.data)
  }else{
      console.error(result.error)
  }
});
