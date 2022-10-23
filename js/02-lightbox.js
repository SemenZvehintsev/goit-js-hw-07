import { galleryItems } from './gallery-items.js';

class Gallery {
    constructor(images) {
        this.images = images;
        this.fullGallery = document.querySelector('.gallery');
    }

    start() {
        this.createGallery()
    }

    createGallery() {
        this.images.forEach(({preview, original, description}) => {
        this.fullGallery.insertAdjacentHTML("afterbegin",
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`);})
    }
}

new Gallery(galleryItems).start();

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});