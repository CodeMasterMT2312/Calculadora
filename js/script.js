const pantalla= document.querySelector(".pantalla");
const btns= document.querySelectorAll(".boton");


btns.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonActual = boton.textContent;

        if (boton.id === 'igual') {
            try {
                // Evaluar la expresión matemática en la pantalla
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = 'Error!';
            }
            return;
        }

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonActual;
        }else{
            pantalla.textContent += botonActual;
        }
    });
});

