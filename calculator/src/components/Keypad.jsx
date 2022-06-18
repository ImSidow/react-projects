export default function Keypad({ data }) {
    console.log(data);
    return (
        <div className="bg-[rgba(0,0,0,.03)] h-16 rounded-xl flex justify-center items-center text-xl">
            <span> {data.icon ?? data.value} </span>
        </div>
    );
}
