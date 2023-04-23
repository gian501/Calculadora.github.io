const pantalla = document.querySelector(".pantalla"); //traemos la pantalla
const botones = document.querySelectorAll(".btn"); //porque son todos los botones, con el all se nos hace un array

botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent; //con esto traemos el contenido del boton

        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        } // el 0 borra todo

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 ||pantalla.textContent === "Error!"){
                pantalla.textContent = "0"
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }//si queda un solo numero lo vuelve a 0
            return;
        }//esto borra el ultimo numero o operacion marcada 

        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent= "Error!";
            }
            return;
        }// utilizamos el eval, evaluando en un conjunto de string y nos devuelve una sola string 

        if(pantalla.textContent === "0"||pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado; //si no tenemos nada lo cambia
        }else{
            pantalla.textContent += botonApretado; // se le sumen lo apretado
        }
    })
}) // con esto recorre los botones cada vez que los llamamos