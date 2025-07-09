import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [totalSubtotal, setTotalSubtotal] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);

    const subtotal = cartItems.reduce(
      (sum, item) => sum + parseFloat(item.price) * parseInt(item.quantity),
      0
    );
    setTotalSubtotal(subtotal);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const deliveryCharge = 40;
  const totalAmount = totalSubtotal + deliveryCharge;

  return (
    <>
      <Head>
        <title>Cart Page</title>
        <link rel="stylesheet" href="/globals.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Poppins', sans-serif; background: #fff; }
          .navbar {
            width: 100%;
            background-color: #f8f8f8;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 40px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .navbar .logo a {
            font-size: 24px;
            font-weight: 600;
            text-decoration: none;
            color: #333;
          }
          .navbar nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
          }
          .navbar nav ul li a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
          }
          .cart-page {
            padding: 40px;
          }
          .cart-page table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
          }
          .cart-page table th,
          .cart-page table td {
            padding: 15px 20px;
            text-align: left;
            border-bottom: 1px solid #ccc;
          }
          .cart-page table th {
            background-color: #f2f2f2;
            font-weight: 600;
          }
          .total-price {
            display: flex;
            justify-content: flex-end;
            padding-right: 40px;
          }
          .total-price table {
            border-top: 2px solid #333;
            width: 300px;
          }
          .total-price table td {
            padding: 10px;
            font-weight: 500;
          }
          .footer {
            background: #222;
            color: #fff;
            padding: 40px 20px;
            width: 100%;
            margin-top: 40px;
          }
          .footer .container-f {
            max-width: 1200px;
            margin: auto;
          }
          .footer .row-f {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .footer-col {
            flex: 1;
            min-width: 250px;
            margin-bottom: 20px;
          }
          .footer-col h4 {
            margin-bottom: 15px;
            font-size: 18px;
            color: #fff;
          }
          .footer-col ul li {
            margin-bottom: 10px;
            list-style: none;
          }
          .footer-col ul li a {
            color: #bbb;
            text-decoration: none;
          }
          .footer-col .social-links a {
            margin-right: 10px;
            color: #fff;
            font-size: 18px;
          }
          .copyright {
            text-align: center;
            margin-top: 20px;
            color: #bbb;
          }
        `}</style>
      </Head>

      <header className="navbar">
        <div className="logo">
          <Link href="/">logo</Link>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/product">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/account">Account</Link></li>
          </ul>
        </nav>
      </header>
      <br></br><br></br>
      <br></br><br></br>
      


      <main className="cart-page">
        <table id="cartTable">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="cart-info">
                    <p>{item.name}</p>
                    <small>Price: ₹{item.price}</small>
                  </div>
                </td>
                <td><span className="quantity">{item.quantity}</span></td>
                <td>₹{(parseFloat(item.price) * parseInt(item.quantity)).toFixed(2)}</td>
                <td>
                  <a href="#" onClick={(e) => { e.preventDefault(); removeItem(index); }}>Remove</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>₹{totalSubtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Delivery Charge</td>
                <td>₹{deliveryCharge}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>₹{totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer className="footer">
        <div className="container-f">
          <div className="row-f">
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Payment Options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/product">Our Services</Link></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright text-center">
            <h5>© 2025 myShop.com — All rights reserved</h5>
          </div>
        </div>
      </footer>
    </>
  );
}
