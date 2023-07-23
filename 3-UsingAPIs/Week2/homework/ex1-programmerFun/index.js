
return fetch(url)
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.catch((error) => {
  throw new Error(`Network error: ${error.message}`);
});
}

function renderImage(data) {
// TODO render the image to the DOM
console.log(data);
const img = document.createElement('img');
img.src = data.img;
img.alt = 'meme';
document.body.appendChild(img);
}

function renderError(error) {
// TODO render the error to the DOM
console.log(error);
const h1 = document.createElement('h1');
h1.textContent = `Error: ${error.message}`;
chouaib-at marked this conversation as resolved.
document.body.appendChild(h1);
}

// TODO refactor with async/await and try/catch
function main() {
requestData('https://xkcd.now.sh/?comic=latest')
.then((data) => {
  renderImage(data);
})
.catch((error) => {
  renderError(error);
});
async function main() {
try {
const data = await requestData('https://xkcd.now.sh/?comic=latest');
renderImage(data);
} catch (error) {
renderError(error);
}
}

window.addEventListener('load', main);