import DivideIcon from "../components/icons/DivideIcon";
import UndoIcon from "../components/icons/UndoIcon";
import MinusIcon from "../components/icons/MinusIcon";
import PlusIcon from "../components/icons/PlusIcon";
import DotIcon from "../components/icons/DotIcon";
import MultiplicationIcon from "../components/icons/MultiplicationIcon";

const calculatorKeys = {
    1: { value: "AC" },
    2: { value: "DEL" },
    3: { value: "%" },
    4: { value: "/", icon: <DivideIcon /> },
    5: { value: "7" },
    6: { value: "8" },
    7: { value: "9" },
    8: { value: "*", icon: <MultiplicationIcon /> },
    9: { value: "4" },
    10: { value: "5" },
    11: { value: "6" },
    12: { value: "-", icon: <MinusIcon /> },
    13: { value: "1" },
    14: { value: "2" },
    15: { value: "3" },
    16: { value: "+", icon: <PlusIcon /> },
    17: { value: "undo", icon: <UndoIcon /> },
    18: { value: "0" },
    19: { value: ".", icon: <DotIcon /> },
    20: { value: "=" },
};

export default calculatorKeys;
