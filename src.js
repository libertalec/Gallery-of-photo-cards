const slides = document.querySelectorAll(".slide");

slides.forEach(slide => {
    slide.addEventListener("click", () =>{
        clearActiveClasses()

        slide.classList.add("active");
        // slide.classList.toggle("active");
        // Использовал метод toggle, так как с ним выглядит интереснее
    })
})

function clearActiveClasses(){
    slides.forEach(slide => {
        slide.classList.remove("active");
    })
}