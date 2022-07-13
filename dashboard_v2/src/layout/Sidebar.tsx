import React, { FunctionComponent } from "react";

import { Logo, UserIcon, DownloadIcon, GraphIcon, CalenderIcon, FireIcon, PieChartIcon, ImagePlaceholderIcon } from "../components/icons";

const Sidebar: FunctionComponent = () => {
    return (
        <aside className="w-20 bg-white flex flex-col items-center py-5 divide-y divide-gray-400">
            <Logo width="30" height="30" />
            <div className="mt-6 py-6 w-4/6 flex flex-col items-center space-y-14">
                <Link href="">
                    <UserIcon width="20" height="20" className="text-gray-800" />
                </Link>
                <Link href="">
                    <DownloadIcon width="20" height="20" className="text-gray-400 hover:text-gray-800" />
                </Link>
                <Link href="">
                    <GraphIcon width="20" height="20" className="text-gray-400 hover:text-gray-800" />
                </Link>
                <Link href="">
                    <ImagePlaceholderIcon width="20" height="20" className="text-gray-400 hover:text-gray-800" />
                </Link>
                <Link href="">
                    <CalenderIcon width="20" height="20" className="text-gray-400 hover:text-gray-800" />
                </Link>
                <Link href="">
                    <FireIcon width="20" height="20" className="text-gray-400 hover:text-gray-800" />
                </Link>
                <Link href="">
                    <PieChartIcon width="20" height="20" className="text-gray-400 hover:text-gray-800" />
                </Link>
            </div>
        </aside>
    );
};

function Link({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <a href={href} className="hover:text-gray-700">
            {children}
        </a>
    );
}

export default Sidebar;
