import { useSmartAccountContext } from "../contexts/SmartAccountContext";
import { useWeb3AuthContext } from "../contexts/SocialLoginContext";

const MockCreateWallet = () => {
  const {
    address,
    loading: eoaLoading,
    userInfo,
    connect,
    disconnect,
    getUserInfo,
  } = useWeb3AuthContext();
  const {
    selectedAccount,
    loading: scwLoading,
    setSelectedAccount,
  } = useSmartAccountContext();

  return (
    <div>
      <button
        onClick={
          !address
            ? connect
            : () => {
                setSelectedAccount(null);
                disconnect();
              }
        }
      >
        {!address ? "Connect Wallet" : "Disconnect Wallet"}
      </button>

      {eoaLoading && <h2>Loading EOA...</h2>}

      {address && (
        <div>
          <h2>EOA Address</h2>
          <p>{address}</p>
        </div>
      )}

      {scwLoading && <h2>Loading Smart Account...</h2>}

      {selectedAccount && address && (
        <div>
          <h2>Smart Account Address</h2>
          <p>{selectedAccount.smartAccountAddress}</p>
        </div>
      )}

      {address && (
        <button onClick={() => getUserInfo()} title="Get User Info" />
      )}

      {userInfo && (
        <div style={{ maxWidth: 800, wordBreak: "break-all" }}>
          <h2>User Info</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(userInfo, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default MockCreateWallet;
