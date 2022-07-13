import { FunctionComponent } from "react";
import { svgIconType } from "../../core/types";

const PieChartIcon: FunctionComponent<Partial<svgIconType>> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 32 32" {...props}>
            <path xmlns="http://www.w3.org/2000/svg" d="m14.86 0a1.14 1.14 0 0 0 -1.14 1.14v13.72a3.43 3.43 0 0 0 3.43 3.43h13.71a1.14 1.14 0 0 0 1.14-1.15 17.16 17.16 0 0 0 -17.14-17.14zm2.29 16a1.14 1.14 0 0 1 -1.15-1.14v-12.53a14.88 14.88 0 0 1 13.67 13.67z" fill="currentColor"></path>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m28.16 20.64a1.14 1.14 0 0 0 -1.46.7 12.47 12.47 0 0 1 -12.55 8.36 12.66 12.66 0 0 1 -11.86-12 12.5 12.5 0 0 1 8.37-12.4 1.14 1.14 0 0 0 -.76-2.16 14.77 14.77 0 0 0 -9.9 14.62 15 15 0 0 0 14 14.24h.84a14.73 14.73 0 0 0 14-9.9 1.14 1.14 0 0 0 -.68-1.46z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

export default PieChartIcon;
