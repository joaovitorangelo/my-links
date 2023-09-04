function toggleMode() {
    const html = document.documentElement

        //OR html.classList.toggle('light')
    if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    
        //pegar a tag img
    const img = document.querySelector("#profile img")

        //substituir a imagem
    if (html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/perfil.png")
        img.setAttribute("alt", "avatar-light")
    } else {
        //se tiver sem light mode, manter a foto normal
        img.setAttribute("src", "./assets/perfil.png")
        img.setAttribute("alt", "avatar-dark")
    }
}

//modal
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-mod");
const modal = document.querySelector("#mod");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade]. forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

