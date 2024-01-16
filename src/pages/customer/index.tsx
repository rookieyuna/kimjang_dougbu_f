import Button from "../../utils/Button";
import { Link } from 'react-router-dom';
import Calendar from "../../utils/Calendar";

export default function Customer () {
    const remainList = () =>{
        console.log('remainList')
    }

    const modify = () =>{
        console.log('회수염')
    }

    return (
        <div className="container">
            <div className="mx-auto flex flex-wrap p-1 flex-col items-center bg-gray-200">
                <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a href="#remainList" className="block py-2 px-3 mr-5 lg:inline-block lg:mt-0 text-gray-900 md:dark hover:text-indigo-500">
                                회원목록
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                이름/주소
                            </th>
                            <th scope="col" className="px-6 py-3">
                                전화번호
                            </th>
                            <th scope="col" className="px-6 py-3">
                                접수건수
                            </th>
                            <th scope="col" className="px-6 py-3">
                                미회수건수
                            </th>
                            <th scope="col" className="px-6 py-3">
                                등록일자
                            </th>
                            <th scope="col" className="px-6 py-3">
                                활성화여부
                            </th>
                            <th scope="col" className="px-6 py-3">
                                수정
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                동부103동508호
                            </th>
                            <td className="px-6 py-4">
                                010-1234-5678
                            </td>
                            <td className="px-6 py-4">
                                10
                            </td>
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4">
                                2024.01.02
                            </td>
                            <td className="px-6 py-4">
                                Y
                            </td>
                            <td className="px-6 py-4">
                            <Button onClick={modify} color='basic' size='xs' className="text-sm">
                                수정
                            </Button>
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                -
                            </th>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                            <Button onClick={modify} color='basic' size='xs' className="text-sm">
                                수정
                            </Button>
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                -
                            </th>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                            <Button onClick={modify} color='basic' size='xs' className="text-sm">
                                수정
                            </Button>
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}