// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
//import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
console.log(galleryItems);

console.log(galleryItems);

const divgalEl = document.querySelector('.gallery');
const newStructEl = galleryItems.map((elem) => `
<li class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img class="gallery__image" src="${elem.preview}"
      data-source="${elem.original}" alt="${elem.description}" />
  </a>
</li>`).join("");
divgalEl.style.listStyle = 'none';
divgalEl.insertAdjacentHTML("beforeend", newStructEl);

let gallery = new SimpleLightbox('.gallery a', {
    enableKeyboard: true,
    captionPosition: 'bottom',
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
    showCounter: false,
});
gallery.open

