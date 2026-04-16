import React, { useEffect, useRef } from 'react';

import './PromoFinal.css';

export const PromoFinal = () => {
  const promoFinalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    promoFinalRef.current?.classList.add('promo-final--active');
  }, []);

  return (
    <div ref={promoFinalRef} className="promo-final" data-testid="promo-final">
      <h1 className="promo-final__title">
        ЗАЯВКА
        <br />
        ПРИНЯТА
      </h1>
      <p className="promo-final__text">
        Держите телефон под рукой.
        <br />
        Скоро с Вами свяжется наш менеджер.
      </p>
    </div>
  );
};
