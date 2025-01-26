// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch((err) => console.error('Service Worker Registration Failed:', err));
}

// Load products dynamically
const productsContainer = document.getElementById('products');
const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' }
];

products.forEach((product) => {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: ${product.price}</p>
  `;
  productsContainer.appendChild(productCard);
});

// Request push notification permission
if ('Notification' in window && 'serviceWorker' in navigator) {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Push notifications enabled');
    }
  });
}
