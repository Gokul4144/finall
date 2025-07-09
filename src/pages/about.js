import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function About() {
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const MenuItems = document.getElementById("MenuItems");
    const innerItems = document.getElementById("inneritems");

    if (MenuItems) MenuItems.style.maxHeight = "0px";
    if (innerItems) innerItems.style.display = "none";
  }, []);

  const toggleProducts = () => {
    const innerItems = document.getElementById("inneritems");
    setShowProducts(!showProducts);
    if (innerItems) {
      innerItems.style.display = showProducts ? "none" : "block";
    }
  };

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="/style.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>

      <div className="header">
        <div className="navbar">
          <div className="logo">
            <a href="/">logo</a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a href="/">Home</a></li>
              <li className="dropdown" onClick={toggleProducts}>
             
                <ul id="inneritems">
                  <li><a href="/moisterizers.html">Moisturizers</a></li>
                  <li><a href="/Serums.html">Serums</a></li>
                  <li><a href="/Cleansers.html">Cleansers</a></li>
                  <li><a href="/Sunscreens.html">Sunscreens</a></li>
                </ul>
              </li>
              <li><a href="/about">About</a></li>
                 <li><a href="/product">Product</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/account">Account</a></li>
            </ul>
          </nav>
          <div className="right-icons">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button><i className="fas fa-search"></i></button>
            </div>
            <a href="/card.html"><i className="fas fa-shopping-cart"></i></a>
            <a href="/account.html"><i className="fas fa-user"></i></a>
          </div>
        </div>
      </div>

      <div className="account-page">
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About Us</h2>
              <br /><br />
              <h3 className="section-subheading text-muted">Some information about our shop.</h3>
            </div>
            <ul className="timeline">
              {[
                {
                  year: "1992-2002",
                  title: "Values And Beliefs",
                  body: [
                    "We treat the customer as our highest priority...",
                    "We also believe in honesty and transparency...",
                    "The journey from 1992 to 2002 was pivotal...",
                    "These values and beliefs continue to guide us..."
                  ]
                },
                {
                  year: "2002-2012",
                  title: "Build A Connection",
                  body: [
                    "From 2002 to 2012, our primary focus shifted...",
                    "We also diversified our product range...",
                    "Customer trust became the cornerstone...",
                    "This decade helped solidify our reputation..."
                  ],
                  inverted: true
                },
                {
                  year: "2012-2022",
                  title: "Certifications, Awards",
                  body: [
                    "From 2012 to 2022, our focus expanded to include...",
                    "During this period, we were proud to receive multiple awards...",
                    "Our commitment to continuous improvement...",
                    "These certifications and awards not only elevated our brand..."
                  ]
                },
                {
                  year: "2022-",
                  title: "Be interesting!",
                  body: [
                    "As we entered the year 2022 and beyond...",
                    "We embrace trends and constantly monitor shifts...",
                    "Our aim is not just to meet expectations...",
                    "As we move forward, we remain optimistic..."
                  ],
                  inverted: true
                }
              ].map(({ year, title, body, inverted }, index) => (
                <li key={index} className={inverted ? "timeline-inverted" : ""}>
                  <div className="timeline-image"><img className="rounded-circle img-fluid" src="/images/team.png" alt="" /></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>{year}</h4>
                      <h4 className="subheading">{title}</h4>
                    </div>
                    <div className="timeline-body">
                      {body.map((para, idx) => (
                        <p key={idx} className="text-muted">{para}</p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Be Part Of Our Shop!</h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="container-f">
          <div className="row-f">
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact.html">Contact Us</a></li>
                <li><a href="/">Our Services</a></li>
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
          <div className="copyright text-center">
            <h5><a href="#">🌐</a> copyright © myshop.com all rights reserved</h5>
          </div>
        </div>
      </footer>
    </>
  );
}
