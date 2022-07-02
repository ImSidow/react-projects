import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
    return (
        <nav className="bg-[#EEF2F3] border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="w-2/6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon className="h-4 w-4" />
                    </div>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 pl-9 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                    />
                </div>

                <div className="flex items-center">
                    <div className="mr-8 flex items-center">
                        <NotificationIcon className="h-6 w-6 mr-5" />
                        <MessageIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <Menu>
                            <Menu.Button className="flex items-center">
                                <div className="mr-2">
                                    <p className="text-sm font-bold"> Axmed </p>
                                    <p className="text-sm font-light -mt-1 text-right"> Admin </p>
                                </div>
                                <img className="w-10 h-10 rounded" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Medium avatar" />
                            </Menu.Button>

                            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                    {active ? <EditActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" /> : <EditInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />}
                                                    Edit
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                    {active ? <DuplicateActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" /> : <DuplicateInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />}
                                                    Duplicate
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                    {active ? <ArchiveActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" /> : <ArchiveInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />}
                                                    Archive
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                    {active ? <MoveActiveIcon className="mr-2 h-5 w-5" aria-hidden="true" /> : <MoveInactiveIcon className="mr-2 h-5 w-5" aria-hidden="true" />}
                                                    Move
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="px-1 py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                    {active ? <DeleteActiveIcon className="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" /> : <DeleteInactiveIcon className="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />}
                                                    Delete
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const EditInactiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
};

const EditActiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
};

const DuplicateInactiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H12V12H4V4Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 8H16V16H8V8Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
};

const DuplicateActiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H12V12H4V4Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 8H16V16H8V8Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
};

const ArchiveInactiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="8" width="10" height="8" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
            <rect x="4" y="4" width="12" height="4" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
};

const ArchiveActiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="8" width="10" height="8" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
            <rect x="4" y="4" width="12" height="4" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
};

const MoveInactiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
};

const MoveActiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
};

const DeleteInactiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="6" width="10" height="10" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
};

const DeleteActiveIcon: React.FunctionComponent<{ className: string }> = (props) => {
    return (
        <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="6" width="10" height="10" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
};

const SearchIcon: React.FunctionComponent<{ className?: string }> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005" {...props}>
            <path
                d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667    S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6    c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z     M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
                fill="#000000"
                data-original="#000000"
            ></path>
        </svg>
    );
};

const MessageIcon: React.FunctionComponent<{ className?: string }> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m392 458h-272c-66.168 0-120-53.832-120-120v-164c0-66.168 53.832-120 120-120h272c66.168 0 120 53.832 120 120v164c0 66.168-53.832 120-120 120zm-272-364c-44.112 0-80 35.888-80 80v164c0 44.112 35.888 80 80 80h272c44.112 0 80-35.888 80-80v-164c0-44.112-35.888-80-80-80zm209.286 197.406 98.855-75.512c8.778-6.705 10.458-19.256 3.753-28.034-6.706-8.778-19.256-10.458-28.034-3.753l-98.843 75.503c-28.541 21.769-68.4 21.785-96.96.055l-95.781-74.455c-8.721-6.78-21.287-5.205-28.065 3.516-6.779 8.721-5.205 21.286 3.516 28.065l95.855 74.512c.048.038.097.075.146.112 21.424 16.34 47.094 24.509 72.77 24.509s51.357-8.174 72.788-24.518z"
                fill="#000000"
                data-original="#000000"
            ></path>
        </svg>
    );
};

const NotificationIcon: React.FunctionComponent<{ className?: string }> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
            <path d="m216 512h80c11.046 0 20-8.954 20-20s-8.954-20-20-20h-80c-11.046 0-20 8.954-20 20s8.954 20 20 20z" fill="#000000" data-original="#000000"></path>
            <path
                d="m256 0c-11.046 0-20 8.954-20 20v21.435c-67.755 9.734-120 68.159-120 138.565v122.956c0 7.048-3.175 13.46-7.899 15.956-19.801 10.455-32.101 30.797-32.101 53.088 0 33.084 26.916 60 60 60h240c33.084 0 60-26.916 60-60 0-22.291-12.3-42.633-32.101-53.088-4.725-2.495-7.899-8.907-7.899-15.956v-122.956c0-70.406-52.245-128.831-120-138.565v-21.435c0-11.046-8.954-20-20-20zm100 180v122.956c0 22.142 11.197 41.809 29.222 51.327 6.648 3.51 10.778 10.299 10.778 17.717 0 11.028-8.972 20-20 20h-240c-11.028 0-20-8.972-20-20 0-7.418 4.13-14.207 10.778-17.717 18.025-9.518 29.222-29.185 29.222-51.327v-122.956c0-55.14 44.86-100 100-100s100 44.86 100 100z"
                fill="#000000"
                data-original="#000000"
            ></path>
        </svg>
    );
};
