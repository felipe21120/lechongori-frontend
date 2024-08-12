import Link from 'next/link';
import React from 'react';
import { IconComponent } from '../../icons/Icons';


interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = '',
  className = '',
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full focus:outline-none ${className}`}
    >
      <IconComponent iconName='whatsapp' altText="whatsapp" width={50} height={50} />
    </Link>
  );
};
