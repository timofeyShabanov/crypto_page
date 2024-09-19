import cl from './AllComponentsInFile.module.scss'
import Transfer from "../TransferBetween/Transfer.jsx";
import LabelCryptoModal from "../LabelCrypto/LabelCryptoModal.jsx";
import LabelFrom from "../LabelFrom/LabelFrom.jsx";
import LabelTo from "../LabelTo/LabelTo.jsx";
import Amount from "../Amount/Amount.jsx";
import TransferBtn from "../TransferBtn/TransferBtm.jsx";
import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput.jsx";

function AllComponentsInFile() {
	const [quantity, setQuantity] = useState(1)
	const handleAmountChange = (e) => {
		setQuantity(e.target.value);
	};
	const handleTransferClick = () => {
		console.log(`Transferring ${quantity}`);
	};

	return (
		<div className={cl.container}>
			<div className={cl.transfer__container}>
				<Transfer props={'Transfer Between Wallets'}/>
				<LabelCryptoModal quantity={quantity}/>
				<LabelFrom/>
				<LabelTo/>
				<Amount onChange={handleAmountChange}/>
				<TransferBtn onClick={handleTransferClick}/>
				<div className={cl.commission__text}> Fee: Without commission</div>
			</div>
			<div className={cl.transfer__history__container}>
				<Transfer props={'Transfer History'}/>
				<SearchInput/>
			</div>
		</div>
	)
}

export default AllComponentsInFile;
