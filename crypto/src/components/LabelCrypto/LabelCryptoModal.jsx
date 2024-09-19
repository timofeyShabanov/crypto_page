import React, { useState, useEffect } from 'react';
import cl from './LabelCrypto.module.scss';
import Crypto from "../Crypto/Crypto.jsx";

function CryptoSelector({ quantity }) {
  const cryptoList = [
    { nameCrypto: 'BTC', text: 'Bitcoin', course: 60524.00 },
    { nameCrypto: 'TON', text: 'Ton coin', course: 5.49 },
    { nameCrypto: 'TON', text: 'Ton coin', course: 5.49 },
    { nameCrypto: 'TON', text: 'Ton coin', course: 5.49 },
    { nameCrypto: 'TON', text: 'Ton coin', course: 5.49 },
    { nameCrypto: 'TON', text: 'Ton coin', course: 5.49 },
    { nameCrypto: 'TON', text: 'Ton coin', course: 5.49 },
  ];

  const createCryptoElement = (crypto) => {
    return (
      <Crypto
        nameCrypto={crypto.nameCrypto}
        text={crypto.text}
        course={crypto.course}
        quantity={quantity}
      />
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(createCryptoElement(cryptoList[0]));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(createCryptoElement(crypto));
    setIsOpen(false);
  };

  useEffect(() => {
    const selectedCryptoData = cryptoList.find(
      (crypto) => crypto.nameCrypto === selectedCrypto.props.nameCrypto
    );
    if (selectedCryptoData) {
      setSelectedCrypto(createCryptoElement(selectedCryptoData));
    }
  }, [quantity]);

  return (
    <div className={cl.crypto__selector}>
      <div className={cl.crypto__selector__title} onClick={toggleDropdown}>
        {selectedCrypto}
      </div>
      {isOpen && (
        <div className={cl.dropdown}>
          {cryptoList.map((crypto, id) => (
            <div
              key={id}
              className={cl.dropdown__item}
              onClick={() => handleCryptoSelect(crypto)}
            >
              {createCryptoElement(crypto)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CryptoSelector;
