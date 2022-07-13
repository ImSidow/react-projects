import { FunctionComponent } from "react";
import { svgIconType } from "../../core/types";

const FireIcon: FunctionComponent<Partial<svgIconType>> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" {...props}>
            <path
                d="M369.215,159.814c-91.389-55.601-48.533-134.078-46.694-137.34c2.668-4.642,2.66-10.353-0.022-14.987    C319.818,2.853,314.87,0,309.516,0c-47.043,0-83.881,13.366-109.49,39.728c-43.759,45.045-41.729,115.152-40.863,145.09    c0.096,3.316,0.179,6.182,0.179,8.31c0,22.228,3.566,42.749,6.713,60.854c2.028,11.667,3.779,21.743,4.09,29.665    c0.333,8.48-1.215,10.424-1.281,10.502c-0.221,0.262-2.061,1.241-7.036,1.241c-5.674,0-9.857-1.854-13.563-6.009    c-14.476-16.232-15.477-60.554-12.709-84.667c0.495-4.252-0.85-8.512-3.697-11.708c-2.846-3.196-6.922-5.024-11.202-5.024    c-38.945,0-68.046,63.688-68.046,120.632c0,26.769,5.384,52.992,16.003,77.94c10.266,24.118,24.905,45.886,43.512,64.696    C150.878,490.425,201.971,512,255.995,512c54.241,0,105.321-21.27,143.831-59.89c38.41-38.52,59.563-89.483,59.563-143.498    C459.388,239.69,405.462,181.865,369.215,159.814z M255.995,482c-93.983,0-173.383-79.401-173.383-173.388    c0-22.857,5.454-46.85,14.963-65.825c2.221-4.433,4.5-8.236,6.749-11.44c0.251,24.747,4.171,58.482,21.526,77.972    c9.362,10.513,21.803,16.07,35.979,16.07c13.243,0,23.335-4.014,29.993-11.93c12.448-14.798,8.627-36.782,3.791-64.615    c-2.939-16.91-6.27-36.077-6.27-55.717c0-2.563-0.089-5.628-0.191-9.179c-0.821-28.358-2.53-87.367,32.393-123.316    C237.222,44.493,259.11,34.671,286.8,31.31c-3.126,10.38-5.821,23.557-5.925,38.311c-0.23,32.508,12.204,78.989,72.748,115.823    c29.293,17.821,75.766,67.018,75.766,123.169C429.388,404.219,351.604,482,255.995,482z"
                fill="currentColor"
            ></path>
        </svg>
    );
};

export default FireIcon;
