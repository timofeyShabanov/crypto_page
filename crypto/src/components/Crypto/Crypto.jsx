import cl from './Crypto.module.scss';

const Crypto = ({ nameCrypto, text, course, quantity }) => {
	const calculation = () => {
		return (quantity * course).toFixed(2);
	};

	return (
		<div className={cl.container}>
			<img className={cl.img} src={`/img/${nameCrypto}.png`} alt={`${nameCrypto}`} />
			<div className={cl.name__text}>
				{nameCrypto} {text}
			</div>
			<div className={cl.quantity}>
				{quantity} {nameCrypto}
				<span className={cl.quantity__sub__text}> ≈ {calculation()}$</span>
			</div>
		</div>
	);
};

export default Crypto;