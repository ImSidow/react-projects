export default function Card({ value, onClick }) {
    value = value === "" ? null : value;
    const style = value ? "text-5xl" : "text-5xl invisible";

    return (
        <div onClick={onClick} className="flex justify-center items-center rounded-md border box-content">
            <span className={style}>{value ?? "-"}</span>
        </div>
    );
}
