const toggleClass = () => {
    const zarovka = document.querySelector(".bulb");
    zarovka.classList.toggle("bulb--on");
}

document.addEventListener("keydown", toggleClass);
