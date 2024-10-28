import { tarjetaUno, tarjetaDos, tarjetaTres } from "./tarjetas.mjs";
import {
    generadorNumeroUno,
    generadorNumeroDos,
    generadorNumeroTres,
} from "./tarjetas.mjs";
import obtenerCaracteristicasPersonaje from "./fetchData.mjs";

// Manipulación del DOM
const tarjetaPrincipalUno = document.querySelector(".tarjetaPrincipalUno");
const tarjetaPrincipalDos = document.querySelector(".tarjetaPrincipalDos");
const tarjetaPrincipalTres = document.querySelector(".tarjetaPrincipalTres");

const generadorUno = generadorNumeroUno();
const generadorDos = generadorNumeroDos();
const generadorTres = generadorNumeroTres();

tarjetaPrincipalUno.addEventListener("mouseenter", async () => {
    const { value, done } = generadorUno.next();

    if (done) {
        tarjetaPrincipalUno.removeEventListener("mouseenter", arguments[0]);
        return;
    }

    const caracteristicasPersonaje = await obtenerCaracteristicasPersonaje(value);
    const tarjetaGenerada = tarjetaUno(caracteristicasPersonaje);

    // Añadir la tarjeta generada justo al lado de la tarjeta base
    tarjetaPrincipalUno.insertAdjacentHTML("afterend", tarjetaGenerada);
});

tarjetaPrincipalDos.addEventListener("mouseenter", async () => {
    const { value, done } = generadorDos.next();

    if (done) {
        tarjetaPrincipalDos.removeEventListener("mouseenter", arguments[0]);
        return;
    }

    const caracteristicasPersonaje = await obtenerCaracteristicasPersonaje(value);
    const tarjetaGenerada = tarjetaDos(caracteristicasPersonaje);

    // Añadir la tarjeta generada justo al lado de la tarjeta base
    tarjetaPrincipalDos.insertAdjacentHTML("afterend", tarjetaGenerada);
});

tarjetaPrincipalTres.addEventListener("mouseenter", async () => {
    const { value, done } = generadorTres.next();

    if (done) {
        tarjetaPrincipalTres.removeEventListener("mouseenter", arguments[0]);
        return;
    }

    const caracteristicasPersonaje = await obtenerCaracteristicasPersonaje(value);
    const tarjetaGenerada = tarjetaTres(caracteristicasPersonaje);

    // Añadir la tarjeta generada justo al lado de la tarjeta base
    tarjetaPrincipalTres.insertAdjacentHTML("afterend", tarjetaGenerada);
});
