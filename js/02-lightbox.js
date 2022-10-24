import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

refs.gallery.addEventListener("click", onGalleryClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join(" ");
}

function onGalleryClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return console.log(`not that`);
  }
  const source = evt.target.dataset.source;
}

// var lightbox = $(".gallery a").simpleLightbox({
//   /* options */
// });

// lightbox();

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  // do something…
});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // some usefull information
});
