import { useSetKeyPressedContext } from "../context/keyPressedContext";

export default function Keypad({ data }) {
    const SetKeyPressed = useSetKeyPressedContext()

    return (
        <div
            onClick={() => SetKeyPressed(data)}
            className="bg-[rgba(0,0,0,.03)] h-16 rounded-xl flex justify-center items-center text-xl cursor-pointer hover:bg-[rgba(0,0,0,.07)]"
        >
            <span> {data.icon ?? data.value} </span>
        </div>
    );
}
