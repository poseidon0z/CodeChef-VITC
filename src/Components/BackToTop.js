import React from 'react';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {backToTop && (
        <button
          style={{
            position: 'fixed',
            bottom: '1em',
            right: '1em',
            padding: '4px',
            borderRadius: '50%',
            backgroundColor: '#2e3444',
            border: 'none',
          }}
          onClick={scrollUp}
        >
          <FaArrowUp
            style={{
              boxSizing: 'border-box',
              width: '2em',
              height: '2em',
              borderRadius: '50%',
              color: '#fff',
            }}
          />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
