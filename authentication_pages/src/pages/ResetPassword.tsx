import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, Asserts } from "yup";

const schema = object({
    email: string().email().required(),
    password: string().required(),
});

export default function SignIn() {
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Asserts<typeof schema>>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="bg-white w-2/6 rounded-xl p-3 drop-shadow-md">
                <h1 className="text-center text-2xl font-semibold mt-5"> Welcome Back </h1>
                <p className="text-center text-sm font-light mt-3"> Enter your credential to access your account. </p>

                <form onSubmit={handleSubmit(onSubmit)} className="px-3 mt-10 mb-5">
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-[#2680FE] dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </div>
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@flowbite.com"
                                {...register("email")}
                            />
                        </div>
                        {errors.email && <div className="text-red-400 ml-1"> {errors.email?.message} </div>}
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#2680FE] dark:text-gray-400">
                                    <path
                                        xmlns="http://www.w3.org/2000/svg"
                                        d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="password"
                                {...register("password")}
                            />
                        </div>
                        {errors.password && <div className="text-red-400 ml-1"> {errors.password?.message} </div>}
                    </div>

                    <button type="submit" className="text-white w-full mt-5 bg-[#2680FE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#2680FE] focus:outline-none dark:focus:ring-blue-800">
                        Sign In
                    </button>
                </form>
            </div>

            <p className="mt-10 text-sm font-light">
                I don't have an account?
                <Link to="/sign-up" className="text-[#2680FE] font-semibold ml-1">
                    Register Now
                </Link>
            </p>
        </div>
    );
}
