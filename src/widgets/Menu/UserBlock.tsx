import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  isDark: boolean;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, isDark }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          size="sm"
          variant="primary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          variant={isDark ? "primary" : "primary"}
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
