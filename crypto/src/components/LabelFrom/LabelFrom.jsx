import React, { useState } from 'react';
import cl from './LabelFrom.module.scss'

function LabelFrom() {
  const labelFrom = [
    'Funding wallet',
    'шото еще'
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(labelFrom[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCryptoSelect = (labelFrom) => {
    setSelected(labelFrom);
    setIsOpen(false);
  };

  return (
    <div className={cl.crypto__selector}>
      <div className={cl.prev__text}>From</div>
      <div className={cl.crypto__selector__title} onClick={toggleDropdown}>
        {selected}
      </div>
      {isOpen && (
        <div className={cl.dropdown}>
          {labelFrom.map((labelFrom) => (
            <div
              key={labelFrom}
              className={cl.dropdown__item}
              onClick={() => handleCryptoSelect(labelFrom)}
            >
              {labelFrom}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LabelFrom;