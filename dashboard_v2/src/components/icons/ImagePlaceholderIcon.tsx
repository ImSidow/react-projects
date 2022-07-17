import { FunctionComponent } from "react";
import { svgIconType } from "../../core/types";

const ImagePlaceholderIcon: FunctionComponent<Partial<svgIconType>> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 465.968 465" {...props}>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m186.960938 191.890625c37.390624 0 67.699218-30.308594 67.699218-67.699219s-30.308594-67.699218-67.699218-67.699218c-37.390626 0-67.699219 30.308593-67.699219 67.699218.042969 37.371094 30.328125 67.65625 67.699219 67.699219zm0-115.40625c26.34375 0 47.699218 21.355469 47.699218 47.699219s-21.355468 47.699218-47.699218 47.699218-47.699219-21.355468-47.699219-47.699218c.03125-26.332032 21.367187-47.667969 47.699219-47.699219zm0 0"
                fill="currentColor"
            ></path>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m415.96875.484375h-365.96875c-27.601562.03125-49.96875 22.398437-50 50v270c.03125 27.601563 22.398438 49.96875 50 50h365.96875c27.601562-.03125 49.96875-22.398437 50-50v-270c-.03125-27.601563-22.398438-49.96875-50-50zm-365.96875 20h365.96875c16.558594.019531 29.980469 13.4375 30 30v197.152344l-59.832031-84.773438c-9.28125-13.144531-24.320313-21.023437-40.410157-21.164062-16.09375-.140625-31.269531 7.46875-40.777343 20.453125l-68.101563 92.980468c-9.480468 12.996094-27.539062 16.175782-40.886718 7.199219l-50.914063-34.070312c-16.722656-11.21875-38.546875-11.292969-55.34375-.183594l-69.699219 46.417969v-224.011719c.019532-16.558594 13.4375-29.980469 29.996094-30zm365.96875 330h-365.96875c-16.5625-.019531-29.980469-13.441406-30-30v-21.953125l80.742188-53.769531c10.074218-6.652344 23.152343-6.601563 33.175781.121093l50.914062 34.074219c22.25 14.960938 52.347657 9.65625 68.144531-12.007812l68.101563-92.980469c5.703125-7.792969 14.808594-12.359375 24.464844-12.273438 9.65625.085938 18.679687 4.8125 24.246093 12.699219l76.171876 107.925781v38.164063c-.019532 16.558594-13.4375 29.976563-29.992188 30zm0 0"
                fill="currentColor"
            ></path>
        </svg>
    );
};

export default ImagePlaceholderIcon;