import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function LAscorbicLipBalm() {
  useEffect(() => {
    const ProductImg = document.getElementById('productImg');
    const SmallImg = document.getElementsByClassName('small-img');

    for (let i = 0; i < SmallImg.length; i++) {
      SmallImg[i].onclick = function () {
        ProductImg.src = SmallImg[i].src;
      };
    }

    const addBtn = document.getElementById('addToCartBtn');
    if (addBtn) {
      addBtn.addEventListener('click', function () {
        const productName = document.querySelector('h1').innerText;
        const productPrice = document.querySelector('.price').innerText.replace('₹', '');
        const productQuantity = document.getElementById('quantity').value;

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = { name: productName, price: productPrice, quantity: productQuantity };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${productName} added to cart!`);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Maleic Bond Repair Complex 5% Hair</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <style>{`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 50px;
            background: #fff;
          }

          .logo a {
            font-weight: bold;
            font-size: 24px;
            color: #000;
            text-decoration: none;
          }

          nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
          }

          nav ul li a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
          }

          .product-wrapper {
            max-width: 1200px;
            margin: auto;
            padding: 40px 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 50px;
            font-family: 'Poppins', sans-serif;
          }

          .left-col {
            flex: 1;
            min-width: 300px;
          }

          .right-col {
            flex: 1;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .main-image {
            width: 100%;
            max-width: 400px;
            border-radius: 8px;
            display: block;
            margin: auto;
          }

          .thumbnail-row {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 20px;
          }

          .small-img {
            width: 70px;
            height: 70px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
            border: 2px solid #ccc;
            transition: 0.3s;
          }

          .small-img:hover {
            border-color: #444;
          }

          .price {
            font-size: 24px;
            color: #e74c3c;
            font-weight: bold;
            margin-top: 10px;
          }

          .rating .fa {
            color: #f39c12;
            margin-right: 4px;
          }

          .cart-actions {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 20px 0;
          }

          .cart-actions input {
            width: 60px;
            padding: 5px;
            font-size: 16px;
            border: 1px solid #ccc;
          }

          .btn {
            padding: 8px 20px;
            background-color: #e74c3c;
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
          }

          .btn:hover {
            background-color: #c0392b;
          }

          ul {
            padding-left: 20px;
          }

          ul li {
            margin-bottom: 8px;
            line-height: 1.5;
          }

          footer {
            background-color: #222;
            color: #fff;
            padding: 40px 20px;
            margin-top: 60px;
          }

          .footer-cols {
            display: flex;
            flex-wrap: wrap;
            gap: 50px;
            justify-content: space-between;
          }

          .footer-col h4 {
            margin-bottom: 15px;
          }

          .footer-col ul {
            list-style: none;
            padding: 0;
          }

          .footer-col ul li {
            margin-bottom: 10px;
          }

          .footer-col ul li a {
            color: #ccc;
            text-decoration: none;
          }

          .footer-col .social-links a {
            color: #fff;
            margin-right: 10px;
            font-size: 18px;
          }

          .copyright {
            text-align: center;
            margin-top: 20px;
            color: #aaa;
          }
        `}</style>
      </Head>

      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <Link href="/">logo</Link>
        </div>
        <nav>
          <ul id="MenuItems">
            <li><Link href="/">Home</Link></li>
          
            <li><Link href="/about">About</Link></li>
             <li><Link href="/product">Product</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/account">Account</Link></li>
          </ul>
        </nav>
        <Link href="/card"><i className="fas fa-shopping-cart"></i></Link>
      </div>
<br></br><br></br><br></br>
      {/* Product Section */}
      <div className="product-wrapper">
        <div className="left-col">
          <img src="images\MaleicTrioListing-5.avif" id="productImg" className="main-image" alt="Lip Balm" />
          <div className="thumbnail-row">
            {[1, 2, 3, 4].map((_, i) => (
              <img key={i} src="images\MaleicTrioListing-5.avif" className="small-img" alt={`thumb-${i}`} />
            ))}
          </div>
        </div>

        <div className="right-col">
          <h1>Maleic Bond Repair Complex Hair Care Trio</h1>
          <p className="price">₹999</p>
          <div className="rating">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="fa fa-star checked"></span>
            ))}
            <span className="fa fa-star"></span>
          </div>
          <p><strong>"Exclusively Available only on Our Website"</strong></p>

          <div className="cart-actions">
            <input type="number" id="quantity" defaultValue={1} min={1} />
            <button className="btn" id="addToCartBtn">Add To Cart</button>
          </div>

          <h3>Product Details</h3>
          <p><b>Product Type:</b> Serom</p>
          <p><b>Brand:</b> Minimalist</p>

          <ul>
            <p><b>About this item</b></p>
            <li>• Prevents & treats hyperpigmentation, hydrates and softens lips</li>
            <li>• Maleic Bond Repair Complex Hair Care Trio</li>
            <li>• Fragrance free</li>
            <li>• Essential oil free</li>
            <li>• Non-comedogenic</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Payment Options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/product">Our Services</Link></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>🌐 Copyright © logo.com All rights reserved</p>
        </div>
      </footer>
    </>
  );
}  