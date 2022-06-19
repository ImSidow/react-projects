import Board from "./components/Board";
import { KeyPressedProvider } from "./context/keyPressedContext";

export default function App() {
    return (
        <KeyPressedProvider>
            <main className="bg-[#E8E8E8] h-screen overflow-hidden flex justify-center items-center">
                <Board />
            </main>
        </KeyPressedProvider>
    );
}
