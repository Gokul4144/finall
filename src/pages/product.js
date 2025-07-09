import Head from 'next/head';
import Link from 'next/link';

export default function Product() {
  return (
    <>
      <Head>
        <title>Haircare Product</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <style>{`
          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background-color: #fff;
          }
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 30px;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .navbar .logo a {
            font-weight: 700;
            font-size: 22px;
            color: #333;
            text-decoration: none;
          }
          .navbar nav ul {
           
          
          }
          .navbar nav ul li a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
          }
          .dropdown ul {
            display: none;
            position: absolute;
            background-color: white;
            padding: 10px;
            list-style: none;
            margin-top: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .dropdown:hover ul {
            display: block;
          }
          .menu-icon {
            width: 25px;
            height: auto;
            cursor: pointer;
          }
          .small-container {
            padding-top: 120px;
            padding-bottom: 60px;
            max-width: 1200px;
            margin: auto;
          }
          .row {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            margin-bottom: 40px;
          }
          .col-4 {
            flex: 1;
            min-width: 250px;
            max-width: 30%;
            border: 1px solid #eee;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 1px 4px rgba(0,0,0,0.08);
            text-align: center;
          }
          .col-4 img {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }
          .buy-btn {
            background-color: #444;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 10px;
          }
          .footer {
            background: #222;
            color: #fff;
            padding: 40px 0 20px;
          }
          .footer .container-f {
            max-width: 1200px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .footer-col h4 {
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: 600;
            position: relative;
          }
          .footer-col ul {
            list-style: none;
            padding: 0;
          }
          .footer-col ul li {
            margin-bottom: 10px;
          }
          .footer-col ul li a {
            color: #bbb;
            text-decoration: none;
          }
          .social-links a {
            color: #fff;
            margin-right: 10px;
            font-size: 18px;
          }
          .copyright {
            text-align: center;
            padding-top: 10px;
            font-size: 14px;
            color: #aaa;
          }
        `}</style>
      </Head>

      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link href="/">logo</Link>
          </div>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li className="dropdown">
             
              
              </li>
              <li><Link href="/about">About</Link></li>
                <li><Link href="/product">Product</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/account">Account</Link></li>
            </ul>
          </nav>
          <Link href="/cart"><i className="fas fa-shopping-cart"></i></Link>
        </div>
      </div>

      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Default Sorting</option>
            <option>Sort by price</option>
            <option>Sort by popularity</option>
            <option>Sort by rating</option>
            <option>Sort by sale</option>
          </select>
        </div>

        <div className="row">
          <div className="col-4">
            <img src="/images\hair18-1.avif" alt="" />
            <h4>Hair Growth Actives 18% Hair Serum</h4>
            <p>Capixyl, Redensyl & Procapil for Hairfall</p>
            <p>Rs.350</p>
            <Link href="/Hairgrowth"><button className="buy-btn">Buy</button></Link>
          </div>

          <div className="col-4">
            <img src="/images/MaleSerumNew-2.avif" alt="" />
            <h4>Maleic Bond Repair Complex 5% Hair Serum</h4>
            <p>Frizz, Weak, Damaged Hair</p>
            <p>Rs.474</p>
            <Link href="/Maleicbond"><button className="buy-btn">Buy</button></Link>
          </div>

          <div className="col-4">
            <img src="/images/FrizzzNew-3.avif" alt="" />
            <h4>Frizz Control Complex SPF 30 Hair Serum</h4>
            <p>Frizzy Hair, UV Exposure / Damage</p>
            <p>Rs.560</p>
            <Link href="/Frizzcontrol"><button className="buy-btn">Buy</button></Link>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src="/images/MaskNew-4.avif" alt="" />
            <h4>Maleic Bond Repair Complex 5% Hair Mask</h4>
            <p>Dull, Frizzy, Weak & Damaged Hair</p>
            <p>Rs.664</p>
            <Link href="/Maleicbonds"><button className="buy-btn">Buy</button></Link>
          </div>

          <div className="col-4">
            <img src="/images/MaleicTrioListing-5.avif" alt="" />
            <h4>Maleic Bond Repair Complex Hair Care Trio</h4>
            <p>Frizzy, Weak & Damaged Hair</p>
            <p>Rs.1709</p>
            <Link href="/trio"><button className="buy-btn">Buy</button></Link>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container-f">
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
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>🌐 copyright © myShop.com all rights reserved</p>
        </div>
      </footer>
    </>
  );
}
