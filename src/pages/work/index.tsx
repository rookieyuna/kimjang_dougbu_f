import Button from "../../utils/Button";
import { Link } from 'react-router-dom';
import Calendar from "../../utils/Calendar";

export default function Work () {
    const remainList = () =>{
        console.log('remainList')
    }

    return (
        <div className="container">
            <div className="mx-auto flex flex-wrap p-1 flex-col items-center bg-gray-200">
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

            <Calendar/>
            
        </div>
    )
}