import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { BinanceIcon } from "../../components/Svg";
import EthereumIcon from "./icons/Ethereum";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import { Login } from "./types";

import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";

interface ButtonProps {
  title: string;
  onDismiss: () => void;
  mb: string;
  Icon: any;
}

interface Props {
  onDismiss?: () => void;
}

const ChainModal: React.FC<Props> = ({ onDismiss = () => null }) => {
  const networks = [
    {
      title: "Binance",
      id: "bsc",
      icon: <BinanceIcon width="32px" />,
      connectorId: "injected",
      url: "https://bsc.ibg.finance",
    },
    {
      title: "Ethereum",
      id: "eth",

      icon: <EthereumIcon width="32px" />,
      connectorId: "injected",
      url: "https://eth.ibg.finance",
    },
  ];

  return (
    <Modal title="Select A Network" onDismiss={onDismiss}>
      {networks.map((entry, index) => (
        <Button
          fullWidth
          variant="tertiary"
          onClick={() => {
            window.location.replace(entry.url);
            onDismiss();
          }}
          style={{ justifyContent: "space-between" }}
          mb={index < networks.length - 1 ? "8px" : "0"}
          id={`wallet-connect-${entry.title.toLocaleLowerCase()}`}
        >
          <Text bold color="primary" mr="16px">
            {entry.title}
          </Text>
          {/* <Icon width="32px" /> */}
          {entry.icon}
        </Button>
      ))}

      {/* <HelpLink */}
      {/*  href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain" */}
      {/*  external */}
      {/* > */}
      {/*  <HelpIcon color="primary" mr="6px" /> */}
      {/*  Learn how to connect */}
      {/* </HelpLink> */}
    </Modal>
  );
};

export default ChainModal;
