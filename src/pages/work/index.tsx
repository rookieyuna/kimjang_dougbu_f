import Button from "../../utils/Button";
import { Link } from 'react-router-dom';

export default function Work () {
    const remainList = () =>{
        console.log('remainList')
    }

    return (
        <div>
            <div className="container mx-auto flex flex-wrap p-1 flex-col items-center bg-gray-200">
                <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a href="#remainList" className="block py-2 px-3 mr-5 lg:inline-block lg:mt-0 text-gray-900 md:dark hover:text-indigo-500">
                                미회수목록
                            </a>
                            <a href="#allList" className="block py-2 px-3 mr-5 lg:inline-block lg:mt-0 text-gray-900 md:dark hover:text-indigo-500">
                                전체목록
                            </a>
                            <a href="#creditList" className="block py-2 px-3 mr-5 lg:inline-block lg:mt-0 text-gray-900 md:dark hover:text-indigo-500">
                                외상목록
                            </a>
                            <a href="#longCreditList" className="block py-2 px-3 mr-5 lg:inline-block lg:mt-0 text-gray-900 md:dark hover:text-indigo-500">
                                장기미수목록
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            <div date-rangepicker className="flex items-center">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
                </div>
            </div>
        </div>
    )
}