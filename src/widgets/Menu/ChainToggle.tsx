import React from "react";
import Button from "../../components/Button/Button";
import { BinanceIcon } from "../../components/Svg";
import EthereumIcon from "../WalletModal/icons/Ethereum";

import { Toggle } from "../../components/Toggle";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  isBinance?: boolean;
}

const ChainToggle: React.FC<Props> = ({ account, isBinance = true }) => {
  const { onPresentChainToggleModal } = useWalletModal(
    () => null,
    () => null,
    account
  );
  return (
    <div style={{ marginLeft: 10, marginRight: 10 }}>
      {isBinance ? (
        <BinanceIcon
          height={40}
          width={40}
          onClick={() => {
            onPresentChainToggleModal();
          }}
        />
      ) : (
        <EthereumIcon
          height={40}
          width={40}
          onClick={() => {
            onPresentChainToggleModal();
          }}
        />
      )}

      {/* <Modal title="Connect to a wallet" onDismiss={()=>{

      }}>

        <div>
          Hii
        </div>
        
      </Modal>
       */}
    </div>
  );
};

export default ChainToggle;
