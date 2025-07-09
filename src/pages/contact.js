import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    const MenuItems = document.getElementById("MenuItems");
    const innerItems = document.getElementById("inneritems");

    if (MenuItems) MenuItems.style.maxHeight = "0px";
    if (innerItems) innerItems.style.display = "none";

    window.menutoggle = function () {
      if (MenuItems.style.maxHeight === "0px") {
        MenuItems.style.maxHeight = "200px";
      } else {
        MenuItems.style.maxHeight = "0px";
      }
    };

    window.menutoggl = function () {
      if (innerItems.style.display === "none") {
        innerItems.style.display = "block";
      } else {
        innerItems.style.display = "none";
      }
    };
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="/">logo</a>
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="dropdown" onClick={() => window.menutoggl()}>
                  <a className="active">
                    Products <i className="fas fa-caret-down"></i>
                  </a>
                  <ul id="inneritems">
                    <li>
                      <a href="/moisterizers">moisterizers</a>
                    </li>
                    <li>
                      <a href="/Serums">Serums</a>
                    </li>
                    <li>
                      <a href="/Cleansers">Cleansers</a>
                    </li>
                    <li>
                      <a href="/Sunscreens">Sunscreens</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/account">Account</a>
                </li>
              </ul>
            </nav>
            <a href="/card">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <img
              src="/images/menuicon.jpg"
              className="menu-icon"
              onClick={() => window.menutoggle()}
              alt="menu icon"
            />
          </div>
        </div>

        <div className="account-page">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <br />
              <br />
              <h2>Contact Us</h2>
              <p>You can ask anything related to our shop.</p>
            </div>
            <div className="row">
              <div className="column">
                <form action="/action_page.php">
                  <label htmlFor="fname">Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                  <label htmlFor="lname">Number</label>
                  <input
                    type="number"
                    id="lname"
                    name="lastname"
                    placeholder="Your Contact Number.."
                  />
                  <label htmlFor="country">Reason</label>
                  <select id="country" name="country">
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                    <option value="promotion">Promotion</option>
                    <option value="order">Order</option>
                  </select>
                  <label htmlFor="subject">Subject</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{ height: "170px" }}
                  ></textarea>
                  <input type="submit" value="Submit" />
                </form>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1479.7952241782089!2d75.22774797176085!3d24.285644653096945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3965cf10ccc7477d%3A0x70df7a13dabfc566!2sChoudhary%20kirana%20store!5e1!3m2!1sen!2sin!4v1649331028213!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* General */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }

        /* Navbar */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #f8f8f8;
          padding: 10px 20px;
          border-bottom: 1px solid #ddd;
        }

        .logo a {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          text-decoration: none;
        }

        /* Menu Items */
        nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }

        nav ul li {
          position: relative;
          margin-left: 20px;
        }

        nav ul li a {
          text-decoration: none;
          color: #555;
          font-weight: 500;
        }

        nav ul li a.active {
          color: #cc7979;
        }

        /* Dropdown */
        nav ul li ul {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          flex-direction: column;
          background: #fff;
          border: 1px solid #ccc;
          z-index: 1000;
        }

        nav ul li:hover ul {
          display: flex;
        }

        nav ul li ul li {
          margin: 0;
          padding: 10px;
          white-space: nowrap;
        }

        .menu-icon {
          width: 28px;
          height: 28px;
          cursor: pointer;
          margin-left: 20px;
        }

        /* Menu Toggle Effects */
        #MenuItems {
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        #inneritems {
          display: none;
          flex-direction: column;
        }

        /* Contact Page */
        .account-page {
          background-color: #f2f2f2;
          padding: 60px 20px;
        }

        .account-page h2 {
          font-size: 28px;
          margin-bottom: 10px;
          color: #333;
        }

        .account-page p {
          font-size: 16px;
          color: #666;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          margin-top: 40px;
        }

        .column {
          flex: 1;
          min-width: 300px;
        }

        /* Form */
        form label {
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
          color: #333;
        }

        form input[type="text"],
        form input[type="number"],
        form select,
        form textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          resize: vertical;
          box-sizing: border-box;
          margin-bottom: 20px;
        }

        form input[type="submit"] {
          background-color: #cc7979;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        form input[type="submit"]:hover {
          background-color: #cc7979;
        }

        /* Responsive */
        @media screen and (max-width: 768px) {
          .row {
            flex-direction: column;
          }

          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          nav ul {
            flex-direction: column;
          }

          nav ul li {
            margin: 10px 0;
          }
        }
      `}</style>
    </>
  );
}
