const slider = document.getElementById("minmax-range");
const imageContainer = document.getElementById("compressed-image");
slider.addEventListener("input",function () {
    const imageIndex = slider.value-1;
    imageContainer.src = "static/images/compressed/compressed_" + imageIndex + ".png" ;
        
});
