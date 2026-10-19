fetch('../data/productos.json')
  .then(response => response.json())
  .then(productos => {
    const contenedor = document.getElementById('productos-container');

    productos.forEach(producto => {
      const card = document.createElement('article');
      card.className = 'card tarjeta-curso shadow-sm';
      card.style.width = '18rem';

      card.innerHTML = `
        <img src="${producto.url_imagen}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body text-center">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="fw-bold text-azul-club fs-5">${producto.precio}</p>
        </div>
      `;

      contenedor.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al cargar los productos:', error);
  });