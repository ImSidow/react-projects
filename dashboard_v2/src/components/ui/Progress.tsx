import React from "react";
import classname from "classnames";

type propsType = {
    title?: string;
    titleClass?: string;
    percentage: number;
    percentageText?: string;
    percentageTextClass?: string;
    progressContainerClass?: string;
    progressClass?: string;
};

const Progress: React.FunctionComponent<propsType> = ({ title, percentage, titleClass, percentageText, percentageTextClass, progressContainerClass, progressClass }) => {
    return (
        <div>
            {title ? (
                <div className="flex justify-between mb-1">
                    <span className={classname("text-gray-500 dark:text-white", titleClass)}>{title}</span>
                    <span className={classname("text-sm text-gray-700 dark:text-white", percentageTextClass)}>{percentageText}</span>
                </div>
            ) : (
                ""
            )}
            <div className={classname("w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700", progressContainerClass)}>
                <div className={classname("bg-blue-600 h-2 rounded-full", progressClass)} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

export default Progress;
