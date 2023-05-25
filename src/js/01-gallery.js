// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryItemsMarkup = galleryItems.map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
    ).join("");
  
    const galleryList = document.querySelector('.gallery');
    galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);
  
    
  const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
  });
console.log(galleryItems);
