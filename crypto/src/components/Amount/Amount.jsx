import cl from './Amount.module.scss';
import { useState } from 'react';

const Amount = ({ value = 1, onChange, placeholder = "1" }) => {
	const [amount, setAmount] = useState("");

	const handleChange = (e) => {
		const newValue = e.target.value;
		if (newValue <= 100) {
			setAmount(newValue);
			if (onChange) {
				onChange(e);
			}
		}
	};

	const handleMaxClick = () => {
		setAmount('100');
		if (onChange) {
			onChange({ target: { value: 100 } });
		}
	};

	return (
		<div className={cl.container}>
			<div className={cl.text}>
				Amount
			</div>
			<div className={cl.inputWrapper}>
				<input
					type="number"
					value={amount}
					onChange={handleChange}
					placeholder={placeholder}
					className={cl.custom__input}
					min='0'
					max="100"
				/>
				<div onClick={() => handleMaxClick()} className={cl.maxText}>MAX</div>
			</div>
		</div>
	);
};

export default Amount;
