import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

galleryItems.forEach((image) => {
    list.insertAdjacentHTML(
        "beforeend",
        `<div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}" />
      </a>
    </div>`
    );
});

list.addEventListener("click", imageModal);

function imageModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }else
  {
    const instance = basicLightbox.create(`
    <img class="gallery__image" src="${event.target.dataset.source}" width="1280" height="720">
    `);

        instance.show();

    document.addEventListener("keydown", function escapeKey(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  });
        
}return;
}