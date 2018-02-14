const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;
// Agregándole al formulario el evento submit
form.addEventListener('submit', function(event) {
  event.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
});

function addNews() {
  const data = JSON.parse(this.responseText);
  const response = data.response;
  console.log(response);
}

function handleError() {
  console.log('Se ha presentado un error');
}

function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=f94208e7ec01409c9864a5ca6f2ba4e5`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}