import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CategoryCard({ href, img, label }) {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    console.log(`CategoryCard mounted: ${label}`);
  }, []);

  return (
    <div
      className="col-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link href={`/${href}`}>
        <img src={`/${img}`} alt={label} />
      </Link>
      <Link href={`/${href}`}>
        <h4>{label}</h4>
      </Link>
      <Link href={`/${href}`}>
        <p>{hover ? 'Click to explore!' : 'Explore more..'}</p>
      </Link>
    </div>
  );
}
