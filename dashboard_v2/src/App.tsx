
import Logo from './components/icons/Logo'

export default function App() {
    return (
        <main className="h-screen overflow-hidden flex">
            <div className="w-20 bg-white flex flex-col items-center py-5">
                <Logo width='30' height='30' />
            </div>
            <div className="w-full bg-[#F9F9F9]"></div>
        </main>
    );
}
