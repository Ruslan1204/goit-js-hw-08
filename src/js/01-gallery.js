// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const ul = document.querySelector('.gallery');

console.log(ul)


const elements = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <div class="gallery__item">
      <a href="${original}">
      <img src="${preview}" alt="${description}" title=""/>
      </a>
    </div>`
  )
  .join('');

ul.insertAdjacentHTML('beforeend', elements);

new SimpleLightbox(".gallery__item a", {captionsData: 'alt', captionPosition: 'bottom',captionDelay: 250});

