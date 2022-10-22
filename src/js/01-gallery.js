import { galleryItems } from './gallery-items.js';

class Gallery {
    constructor({preview, original, description}) {
        this.preview = preview;
        this.original = original;
        this.description = description;
        this.fullGallery = document.querySelector('.gallery');
    }

    start() {
        this.createGallery()
        this.openFullImg()
    }

    createGallery() {
        galleryItems.forEach(({preview, original, description}) => {
        this.fullGallery.insertAdjacentHTML("afterbegin", 
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>`);})
    }

    openFullImg() {
        this.fullGallery.addEventListener('click', this.fullImg)
    }
    
    fullImg(event) {
        event.preventDefault();
        const srcImg = Object.values(event.target.dataset);
        const fullImg = basicLightbox.create(`
            <img width="1280" src="${srcImg}">
        `);
        fullImg.show()

        window.addEventListener('keydown', function closeByEsc(event) {
            if (event.code === 'Escape') {
            fullImg.close()
            window.removeEventListener('keydown', closeByEsc)
            }
        });
    }    
}

new Gallery(galleryItems).start();