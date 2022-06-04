import TickMarkIcon from "./icons/TickMarkIcon";
import CrossIcon from "./icons/CrossIcon";

export default () => {
    return (
        <div className="flex items-center px-2 py-2 border-b border-gray-300">
            <TickMarkIcon className="w-6 h-6 text-custom-blue-200 rounded-full hover:p-0.5 hover:bg-custom-blue-200 hover:text-custom-blue-500" />
            <p className="ml-3 text-custom-blue-200"> Go to school </p>
            <CrossIcon className="ml-auto mr-2 w-4 h-4 text-red-200" />
        </div>
    );
};
