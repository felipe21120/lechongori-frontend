'use client'

import { useState, useEffect } from 'react';
import { WhatsAppButton } from './scroll-whatsapp/ScrollWhatsapp';

interface ScrollProps {
  className: string;
  phoneNumber: string;
  message?: string;
}

export const ScrollWithWhatsApp = ({ className, phoneNumber, message }: ScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <WhatsAppButton
        phoneNumber={phoneNumber} 
        message={message} 
        className={`fixed bottom-24 right-7 ${className}`} 
      />

      {isVisible && (
        <button 
          className={`fixed bottom-8 right-8 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 focus:outline-none ${className}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </>
  );
};
