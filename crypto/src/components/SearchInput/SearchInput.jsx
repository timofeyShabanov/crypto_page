import cl from "./SearchInput.module.scss";

const SearchInput = () => {
	return (
			<div className={cl.container}>
				<div className={cl.inputWrapper}>
					<input
						type="text"
						placeholder={'Search coins, addresses, MEMO'}
						className={cl.custom__input}
					/>
				</div>
			</div>
	);
};

export default SearchInput;