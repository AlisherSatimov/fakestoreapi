const productsContainer = document.querySelector('.product-list');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      imageElement.alt = product.title;

      const titleElement = document.createElement('h2');
      titleElement.innerText = product.title;

      const descriptionElement = document.createElement('p');
      descriptionElement.innerText = product.description;

      const priceElement = document.createElement('p');
      priceElement.classList.add('price');
      priceElement.innerText = `$${product.price}`;

      const buttonElement = document.createElement('a');
      buttonElement.classList.add('btn');
      buttonElement.href = `product.html?id=${product.id}`;
      buttonElement.innerText = 'View Details';

      productElement.appendChild(imageElement);
      productElement.appendChild(titleElement);
      productElement.appendChild(descriptionElement);
      productElement.appendChild(priceElement);
      productElement.appendChild(buttonElement);

      productsContainer.appendChild(productElement);
    });
  });
