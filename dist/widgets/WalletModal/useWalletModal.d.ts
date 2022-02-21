import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
    onPresentChainToggleModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, account?: string | undefined, selectedChain?: string | undefined) => ReturnType;
export default useWalletModal;
