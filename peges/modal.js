function openModal() {
    document.getElementById("iphoneModal")
        .classList.remove("hidden");
}

function closeModal() {
    document.getElementById("iphoneModal")
        .classList.add("hidden");
}


const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");




thumbs.forEach((thumb) => {

    thumb.addEventListener("click", () => {

        mainImage.src = thumb.src;

        thumbs.forEach((item) => {
            item.classList.remove(
                "border-2",
                "border-violet-600"
            );
        });

        thumb.classList.add(
            "border-2",
            "border-violet-600"
        );
    });

});