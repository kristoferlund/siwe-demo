import { ConnectButton } from "@rainbow-me/rainbowkit";
import LoginButton from "./components/login-button";
import Identity from "./components/identity";

function App() {
  return (
    <main>
      <div className="flex flex-col gap-14 items-center">
        <ConnectButton showBalance={false} />
        <LoginButton />
        <Identity />
      </div>
    </main>
  );
}

export default App;
