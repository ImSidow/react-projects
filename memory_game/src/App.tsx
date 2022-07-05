import { Provider } from "react-redux";
import store from "./store";

import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
    return (
        <Provider store={store}>
            <main className="h-screen overflow-hidden bg-[#F7F7F7] flex flex-col justify-center items-center">
                <Header />
                <Board />
                <Footer />
            </main>
        </Provider>
    );
}
