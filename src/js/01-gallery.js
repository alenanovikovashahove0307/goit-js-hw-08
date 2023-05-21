import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'; // Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// const gallery = document.querySelector('.gallery');
// const galleryLightBoxMarkup = createLightBoxImgGallery(galleryItems);
// gallery.insertAdjacentHTML('beforeend', galleryLightBoxMarkup);
// function createLightBoxImgGallery() {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//         <li class="gallery__item">
//             <a class="gallery__link" href="${original}">
//             <img class="gallery__image" src="${preview}" alt="${description}" />
//             </a>
//         </li>
//      `;
//     })
//     .join(``);
// }
// const galleryLightBox = new SimpleLightbox(`.gallery__link`, {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// console.log(galleryLightBox);
const list = document.querySelector('.gallery');
const imgEl = galleryItems
  .map(
    item =>
      `<li class="gallery__item")><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}"  alt="${item.description}"/></a></li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', imgEl);
const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
console.log(galleryItems);
