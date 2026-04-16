import React, { useEffect, useRef } from 'react';

import qrCode from '../../assets/svg/qr-code.svg';

import './PromoQrCode.css';

export const PromoQrCode = () => {
  const promoQrCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    promoQrCodeRef.current?.classList.add('promo-qr-code--active');
  }, []);

  return (
    <div ref={promoQrCodeRef} className="promo-qr-code">
      <p className="promo-qr-code__text">
        Сканируйте QR-код
        <br />
        ДЛЯ ПОЛУЧЕНИЯ
        <br />
        ДОПОЛНИТЕЛЬНОЙ
        <br />
        ИНФОРМАЦИИ
      </p>

      <img className="promo-qr-code__img" src={qrCode} alt="QR-code" />
    </div>
  );
};
