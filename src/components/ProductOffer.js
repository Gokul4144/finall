import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductOffer() {
  const [productName, setProductName] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProductName('L-Ascorbic Acid 8% Lip Treatment Balm');
    setLoaded(true);
  }, []);

  return (
    <div className="offer">
      <div className="row">
        <div className="col-2">
          <img src="/Salicylic_Body_wash-3.avif" className="offer-img" alt="Offer Product" />
        </div>
        <div className="col-2">
          <h4>Exclusively Available in Our Website</h4>
          <h1>{productName}</h1>
          <small>
            Prevents & treats hyperpigmentation, hydrates and softens lips
          </small>
          <br />
          {loaded && (
            <Link href="/L-Ascorbic Acid 8% Lip Treatment Balm" className="btn">
              Buy Now &#10140;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
