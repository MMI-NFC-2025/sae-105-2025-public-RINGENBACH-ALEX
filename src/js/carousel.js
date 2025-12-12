/*Visible sur la page details de l'artiste : */


const track = document.getElementById("galleryTrack");
const prevButton = document.getElementById("galleryPrev");
const nextButton = document.getElementById("galleryNext");

if (track && prevButton && nextButton) {
    const slideWidth = track.querySelector(".gallery__slide").offsetWidth + 20;

    prevButton.addEventListener("click", () => {
        track.scrollLeft -= slideWidth;
    });

    nextButton.addEventListener("click", () => {
        track.scrollLeft += slideWidth;
    });
}
