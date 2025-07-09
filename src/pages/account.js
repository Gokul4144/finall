import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { auth, db } from '../lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        username,
        email,
        registeredAt: new Date()
      });

      alert('Registration successful!');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Account</title>
      
        <style>{`
              /* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
}

/* Navbar */
.navbar {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  margin-left: 20px;
}

.navbar ul {
  display: flex;
  list-style: none;
}

.navbar ul li {
  margin-left: 25px;
}

/* Account Page */
.account-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
}

.form-container {
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  border-radius: 8px;
  background: #fff;
}

.form-btn {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.form-btn span {
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
}

input {
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.btn {
  width: 100%;
  padding: 12px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #c0392b;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .navbar ul {
    flex-direction: column;
    gap: 10px;
  }

  .form-container {
    padding: 20px;

    
    
  }
}

        
        
        `}     
        </style>
      </Head>

      <div className="container">
        <div className="navbar">
          <Link href="/">logo</Link>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/product">Products</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/account">Account</Link></li>
            </ul>
          </nav>
        </div><br></br><br></br>
<br></br><br></br>
<br></br><br></br>
<br></br><br></br>
<br></br><br></br>
        <div className="account-page">
          <div className="form-container">
            <div className="form-btn">
              <span onClick={() => setIsLogin(true)}>Login</span>
              <span onClick={() => setIsLogin(false)}>Register</span>
            </div>

            {isLogin ? (
              <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="btn">Login</button>
              </form>
            ) : (
              <form onSubmit={handleRegister}>
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="btn">Register</button>
              </form>
            )}
          </div>
        </div>
      </div>

    </>
  );
}
