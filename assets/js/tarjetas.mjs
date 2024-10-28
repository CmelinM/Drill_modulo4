    // Generadores de números
    function* generadorNumeroUno() {
        let num = 1;
        while (num <= 5) {
            yield num;
            num++;
        }
    }

    function* generadorNumeroDos() {
        let num = 6;
        while (num <= 10) {
            yield num;
            num++;
        }
    }

    function* generadorNumeroTres() {
        let num = 12;
        while (num <= 16) {
            yield num;
            num++;
        }
    }

    // Funciones de tarjetas
    function tarjetaUno(dataPersonaje) {
        let cardNueva = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.5s"
                    style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                    
                    <div class="timeline-icon primeraSeccion"></div>
                    <span class="circle red"></span>
                    
                    <div class="timeline-text">
                        <h6>${dataPersonaje.name}</h6>
                        <p>Estatura: ${dataPersonaje.height / 100} mts Peso: ${dataPersonaje.mass} kilos</p>
                    </div>
                </div>
            </div>
        `;
        return cardNueva;
    }

    function tarjetaDos(dataPersonaje) {
        let cardNueva = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.5s"
                    style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                    
                    <div class="timeline-icon segundaSeccion"></div>
                    <span class="circle green"></span>
                    
                    <div class="timeline-text">
                        <h6>${dataPersonaje.name}</h6>
                        <p>Estatura: ${dataPersonaje.height / 100} mts Peso: ${dataPersonaje.mass} kilos</p>
                    </div>
                </div>
            </div>
        `;
        return cardNueva;
    }

    function tarjetaTres(dataPersonaje) {
        let cardNueva = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.5s"
                    style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
                    
                    <div class="timeline-icon terceraSeccion"></div>
                    <span class="circle blue"></span>
                    
                    <div class="timeline-text">
                        <h6>${dataPersonaje.name}</h6>
                        <p>Estatura: ${dataPersonaje.height / 100} mts Peso: ${dataPersonaje.mass} kilos</p>
                    </div>
                </div>
            </div>
        `;
        return cardNueva;
    }

    export { generadorNumeroUno, generadorNumeroDos, generadorNumeroTres, tarjetaUno, tarjetaDos, tarjetaTres };
