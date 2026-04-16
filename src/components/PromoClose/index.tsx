import React, { useEffect, useRef } from 'react';

import './PromoClose.css';

interface PromoCloseProps {
  promoControl?(): void;
}

export const PromoClose = ({ promoControl }: PromoCloseProps) => {
  const promoCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    promoCloseRef.current?.classList.add('promo-close--active');
  }, []);

  return (
    <button
      ref={promoCloseRef}
      data-testid="close"
      className="promo-close"
      id="close"
      onClick={promoControl}
    >
      <span></span>
      <span></span>
    </button>
  );
};
