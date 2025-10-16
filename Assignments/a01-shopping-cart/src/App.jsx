import { useState } from 'react';
import './App.css';

function App() {
  // Initializing state variables
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  // Products Array Literal
  const products = [
    'Camera',
    'E-Bike',
    'Surfboard',
    'Laptop',
    'Sweater',
    'Watch',
    'Headphones',
    'Book',
  ];

  function addProductToCart(e) {
    e.preventDefault();

    const newItem = e.target.elements.products.value;
    const index = cart.findIndex((item) => item.name === newItem);
    console.log(index);
    if (index === -1) {
      const newCartObj = {
        name: newItem,
        quantity: 1,
      };

      setCart([...cart, newCartObj]);
    } else {
      const cartCopy = [...cart];
      cartCopy[index].quantity += 1;
      setCart(cartCopy);
    }

    setItemCount(itemCount + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
      </header>
      <main>
        {/* form for listing available products */}
        <form action="" onSubmit={addProductToCart}>
          <label htmlFor="products">Product: </label>
          <select id="products" name="products">
            {products.map((product, i) => (
              <option key={i} value={product}>
                {product}
              </option>
            ))}
          </select>
          <button type="submit">Add to Cart</button>
        </form>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="cart-items">
            <ul>
              {cart.map((cartItem, i) => (
                <li key={i}>
                  {cartItem.name}
                  {cartItem.quantity > 1 && <span> x {cartItem.quantity}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p>
          {itemCount < 1
            ? 'Add some items...'
            : `You have ${itemCount} 
            ${itemCount > 1 ? 'items' : 'item'}
            in your cart`}
        </p>
      </main>
    </div>
  );
}

export default App;
