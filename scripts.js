document.addEventListener('DOMContentLoaded', function () {
    const recetas = {
        brownie: {
            nombre: "Brownie de Chocolate",
            porcionesIniciales: 6,
            ingredientes: [
                { nombre: 'Harina', cantidad: 200, unidad: 'gramos' },
                { nombre: 'Azúcar', cantidad: 150, unidad: 'gramos' },
                { nombre: 'Mantequilla', cantidad: 100, unidad: 'gramos' },
                { nombre: 'Chocolate', cantidad: 200, unidad: 'gramos' },
                { nombre: 'Huevos', cantidad: 3, unidad: 'unidades' },
                { nombre: 'Vainilla', cantidad: 1, unidad: 'cucharadita' },
                { nombre: 'Sal', cantidad: 1, unidad: 'pizca' }
            ],
            pasos: [
                'Precalentar el horno a 180°C.',
                'Derretir el chocolate y la mantequilla juntos.',
                'Batir los huevos y el azúcar hasta que la mezcla esté esponjosa.',
                'Añadir la vainilla y la mezcla de chocolate y mantequilla a los huevos.',
                'Tamizar la harina y la sal, e incorporarlas a la mezcla.',
                'Verter la masa en un molde y hornear durante 25-30 minutos.'
            ]
        },
        galletas: {
            nombre: "Galletas con Chips de Chocolate",
            porcionesIniciales: 12,
            ingredientes: [
                { nombre: 'Harina', cantidad: 300, unidad: 'gramos' },
                { nombre: 'Azúcar', cantidad: 150, unidad: 'gramos' },
                { nombre: 'Mantequilla', cantidad: 150, unidad: 'gramos' },
                { nombre: 'Chips de Chocolate', cantidad: 200, unidad: 'gramos' },
                { nombre: 'Huevos', cantidad: 2, unidad: 'unidades' },
                { nombre: 'Vainilla', cantidad: 1, unidad: 'cucharadita' },
                { nombre: 'Bicarbonato de Sodio', cantidad: 1, unidad: 'cucharadita' },
                { nombre: 'Sal', cantidad: 1, unidad: 'pizca' }
            ],
            pasos: [
                'Precalentar el horno a 180°C.',
                'Mezclar la mantequilla y el azúcar hasta obtener una mezcla cremosa.',
                'Agregar los huevos y la vainilla, y batir bien.',
                'En otro bol, mezclar la harina, el bicarbonato y la sal.',
                'Agregar los ingredientes secos a la mezcla de mantequilla y azúcar, y mezclar hasta integrar.',
                'Añadir los chips de chocolate y mezclar bien.',
                'Formar bolitas de masa y colocarlas en una bandeja para hornear.',
                'Hornear durante 10-12 minutos o hasta que los bordes estén dorados.'
            ]
        }
    };

    // Determinar qué receta cargar en función de la página
    const recetaActual = document.body.classList.contains('postre1-background') ? recetas.brownie : recetas.galletas;

    let porciones = recetaActual.porcionesIniciales;

    const ingredientesList = document.getElementById('ingredientes-list');
    const preparacionList = document.getElementById('preparacion-list');
    const porcionesCount = document.getElementById('porciones-count');
    const menosPorciones = document.getElementById('menos-porciones');
    const masPorciones = document.getElementById('mas-porciones');

    function actualizarIngredientes() {
        ingredientesList.innerHTML = '';
        recetaActual.ingredientes.forEach(ingrediente => {
            const cantidadAjustada = (ingrediente.cantidad / recetaActual.porcionesIniciales) * porciones;
            const li = document.createElement('li');
            li.textContent = `${cantidadAjustada.toFixed(2)} ${ingrediente.unidad} de ${ingrediente.nombre}`;
            ingredientesList.appendChild(li);
        });
    }

    actualizarIngredientes();

    preparacionList.innerHTML = '';
    recetaActual.pasos.forEach(paso => {
        const li = document.createElement('li');
        li.textContent = paso;
        preparacionList.appendChild(li);
    });

    menosPorciones.addEventListener('click', () => {
        if (porciones > 1) {
            porciones--;
            porcionesCount.textContent = porciones;
            actualizarIngredientes();
        }
    });

    masPorciones.addEventListener('click', () => {
        porciones++;
        porcionesCount.textContent = porciones;
        actualizarIngredientes();
    });
});
