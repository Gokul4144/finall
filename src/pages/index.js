import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();

    if (term.includes('hair')) {
      router.push('/Hairgrowth');
    } else if (term.includes('skin')) {
      router.push('/Maleicbond');
    } else if (term.includes('body')) {
      router.push('/Maleicbonds');
    } else if (term.includes('lip')) {
      router.push('/LAscorbicLipBalm');
    } else {
      alert('Product not found!');
    }
  };

  return (
    <>
      <Head>
        <title>MY Shop</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="/globals.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <style>{`
          .search-bar {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .search-bar input {
            padding: 6px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }

          .search-bar button {
            padding: 6px 10px;
            border: none;
            background-color: #333;
            color: white;
            border-radius: 4px;
            cursor: pointer;
          }

          .footer {
            background-color: #222;
            color: #fff;
            width: 100%;
            padding: 40px 20px;
            box-sizing: border-box;
          }

          .container-f {
            max-width: 1200px;
            margin: auto;
          }

          .row-f {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 40px;
          }

          .footer-col h4 {
            font-size: 18px;
            margin-bottom: 15px;
            text-transform: capitalize;
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
            font-size: 14px;
          }

          .footer-col .social-links a {
            color: white;
            margin-right: 10px;
            font-size: 18px;
            transition: color 0.3s;
          }

          .footer-col .social-links a:hover {
            color: #f39c12;
          }

          .copyright {
            text-align: center;
            color: #aaa;
            margin-top: 20px;
          }
        `}</style>
      </Head>

      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link href="/">logo</Link>
            </div>
            <nav>
              <ul id="MenuItems">
                <li><Link href="/">Home</Link></li>
                <li className="dropdown">
                  <ul id="inneritems">
                    <li><Link href="/moisterizers">Moisterizers</Link></li>
                    <li><Link href="/Serums">Serums</Link></li>
                    <li><Link href="/Cleansers">Cleansers</Link></li>
                    <li><Link href="/Sunscreens">Sunscreens</Link></li>
                  </ul>
                </li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/account">Account</Link></li>
                <li><Link href="/ai">AI</Link></li>
              </ul>
            </nav>
            <div className="right-icons">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button onClick={handleSearch}><i className="fas fa-search"></i></button>
              </div>
              <Link href="/card"><i className="fas fa-shopping-cart"></i></Link>
              <Link href="/account"><i className="fas fa-user"></i></Link>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <h1><center>Here shopping becomes <br />simple!</center></h1>
              <p>
                "We trust something in our store and assume it's good. We don't learn about the most precious thing in life—
                the food we put in our body. Educate yourself!"
              </p>
              <center><Link href="/product" className="btn">Explore Now</Link></center>
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">Categories</h2>
        <div className="row">
          {[
            { href: 'Maleicbond', img: 'skincare.jpg', label: 'Skin care' },
            { href: 'Hairgrowth', img: 'haircare.jpg', label: 'Hair care' },
            { href: 'LAscorbicLipBalm', img: 'Salicylic_Body_wash-3.avif', label: 'Body care' },
            { href: 'trio', img: 'menuicon.jpg', label: 'Lip care' },
          ].map((item, index) => (
            <div className="col-4" key={index}>
              <Link href={`/${item.href}`}><img src={`/${item.img}`} alt="" /></Link>
              <Link href={`/${item.href}`}><h4>{item.label}</h4></Link>
              <Link href={`/${item.href}`}><p>explore more..</p></Link>
            </div>
          ))}
        </div>

        <div className="offer">
          <div className="row">
            <div className="col-2">
              <img src="/Salicylic_Body_wash-3.avif" className="offer-img" alt="" />
            </div>
            <div className="col-2">
              <h4>Exclusively Available in Our Website</h4>
              <h1>L-Ascorbic Acid 8% Lip Treatment Balm</h1>
              <small>Prevents & treats hyperpigmentation, hydrates and softens lips</small><br />
              <Link href="/LAscorbicLipBalm" className="btn">Buy Now &#10140;</Link>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="row">
            <div className="col-3">
              <img src="/affordable.webp" alt="" />
              <h3>Transparency</h3>
              <p>"Full disclosure of ingredients used & their concentration"</p>
            </div>
            <div className="col-3">
              <img src="/affordable.webp" alt="" />
              <h3>Affordable</h3>
              <p>"Skincare, accessible to all"</p>
            </div>
            <div className="col-3">
              <img src="/globe.avif" alt="" />
              <h3>Only the best</h3>
              <p>"Ingredients sourced from across the world"</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container-f">
          <div className="row-f">
            <div className="footer-col">
              <h4>Get help</h4>
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
                <a href="#"><i className="fab fa-whatsapp"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <h5><a href="#">🌐</a> copyright © logo.com all rights reserved</h5>
          </div>
        </div>
      </footer>
    </>
  );
}
