function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-Input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.Value;
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
