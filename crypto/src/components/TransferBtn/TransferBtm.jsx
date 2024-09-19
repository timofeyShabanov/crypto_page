import cl from './TransferBtn.module.scss';

const TransferBtn = ({ onClick }) => {
	return (
		<button className={cl.transferBtn} onClick={onClick}>
			Transfer
		</button>
	);
};

export default TransferBtn;
