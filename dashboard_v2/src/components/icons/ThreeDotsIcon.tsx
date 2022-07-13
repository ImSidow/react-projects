import { FunctionComponent } from "react";
import { svgIconType } from "../../core/types";

const ThreeDotsIcon: FunctionComponent<Partial<svgIconType>> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 32 32" {...props}>
            <path xmlns="http://www.w3.org/2000/svg" id="XMLID_287_" d="m16 13c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" fill="currentColor"></path>
            <path xmlns="http://www.w3.org/2000/svg" id="XMLID_289_" d="m6 13c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" fill="currentColor"></path>
            <path xmlns="http://www.w3.org/2000/svg" id="XMLID_291_" d="m26 13c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" fill="currentColor"></path>
        </svg>
    );
};

export default ThreeDotsIcon;
