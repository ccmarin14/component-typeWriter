const $lenguajes = document.querySelectorAll("span");
let contador = 0;
let posicion = 0;
let time = 0;

const remove = () => {
    return new Promise((resolve, reject) => {
        resolve($lenguajes.forEach(element => {
            setTimeout(() => element.classList.remove("active"),5000)
        }))
    })
}

const asignador = () => {
    return new Promise((resolve, reject) => {
        resolve($lenguajes.forEach(element => {
                if (posicion == contador) {
                    element.classList.add("active")
                }
                contador++;
        }))
        if (posicion == 3) {
            posicion = 0;
        } else {
            posicion++;
        }
        contador = 0;
    })
}

const execTask = async () => {
    data1 = await remove();
    data2 = await asignador();
}

const bucle = () => {
    for (let i = 1; i < 9999; i++) {
        setTimeout(() => execTask(),time)
        time += 5500;
        if (i % 3 == 0) {
        } else {
        
        }
    }
}

bucle()


