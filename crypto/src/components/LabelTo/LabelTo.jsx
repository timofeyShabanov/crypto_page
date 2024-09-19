import React, { useState } from 'react';
import cl from './LabelTo.module.scss'

function LabelTo() {
  const labelTo = [
    'Spot wallet',
    'шото еще'
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(labelTo[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCryptoSelect = (labelTo) => {
    setSelected(labelTo);
    setIsOpen(false);
  };

  return (
    <div className={cl.crypto__selector}>
      <div className={cl.prev__text}>To</div>
      <div className={cl.crypto__selector__title} onClick={toggleDropdown}>
        {selected}
      </div>
      {isOpen && (
        <div className={cl.dropdown}>
          {labelTo.map((labelTo) => (
            <div
              key={labelTo}
              className={cl.dropdown__item}
              onClick={() => handleCryptoSelect(labelTo)}
            >
              {labelTo}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LabelTo;