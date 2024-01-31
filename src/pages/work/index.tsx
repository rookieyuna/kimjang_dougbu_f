import Button from "../../utils/Button";
import { Link } from 'react-router-dom';
import Calendar from "../../utils/Calendar";
import React, {useEffect, useState} from 'react';

import { History } from '../../service/HistoryService';
import HistoryModule from '../../module/HistoryModule';

export default function Work () {
    const remainList = () =>{
        console.log('remainList')
    }

    const done = () =>{
        console.log('회수염')
    }

    const [history, setHistory] = useState<History>({
        htCode: '',
        memCode: 0,
        sdate: 0,
        edate: 0,
        rdate: 0,
        prepaidYn: '',
        prepaidPrice: 0,
        debtYn: '',
        dtCode: 0,
        cardYn: '',
        total: 0
    })
    const [historyList, setHistoryList] = useState<History[]>([])

    const historyModule = HistoryModule.instance

    useEffect(()=>{
        findBySdateBetween()
    },[])

    async function findBySdateBetween() {
        const res = await historyModule.findBySdateBetween({
            sdate: 20240101,
            edate: 20240131,
            debtYn: ""
        })
        setHistoryList(res)
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
            
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                고객
                            </th>
                            <th scope="col" className="px-6 py-3">
                                품목
                            </th>
                            <th scope="col" className="px-6 py-3">
                                라벨번호
                            </th>
                            <th scope="col" className="px-6 py-3">
                                맡긴날짜
                            </th>
                            <th scope="col" className="px-6 py-3">
                                예약날짜
                            </th>
                            <th scope="col" className="px-6 py-3">
                                금액(원)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                메모
                            </th>
                            <th scope="col" className="px-6 py-3">
                                회수
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyList.map((item, i) => {
                            // console.log(item);
                            return (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.memCode}</th>{/* 회원주소/명 */}
                                    <td className="px-6 py-4">{item.dtCode}</td>{/* 품목 */}
                                    <td className="px-6 py-4">{item.htCode}</td>{/* 라벨번호 */}
                                    <td className="px-6 py-4">{item.sdate}</td>{/* 맡긴날짜 */}
                                    <td className="px-6 py-4">{item.rdate}</td>{/* 예약날짜 */}
                                    <td className="px-6 py-4">{item.total}</td>{/* 금액(원) */}
                                    <td className="px-6 py-4">{item.prepaidYn}</td>{/* 메모 */}
                                    <td>
                                        <Button onClick={done} color='basic' size='xs' className="text-sm">
                                            회수
                                        </Button>
                                    </td>
                                </tr>
                            );
                       })}
                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                동부103동508호
                            </th>
                            <td className="px-6 py-4">
                                Y3, 원피스2
                            </td>
                            <td className="px-6 py-4">
                                690-694
                            </td>
                            <td className="px-6 py-4">
                                2024.01.02
                            </td>
                            <td className="px-6 py-4">
                                2024.01.20
                            </td>
                            <td className="px-6 py-4">
                                30,000
                            </td>
                            <td className="px-6 py-4">
                                원피스 주머니 튿어짐
                            </td>
                            <td className="px-6 py-4">
                            <Button onClick={done} color='basic' size='xs' className="text-sm">
                                회수
                            </Button>
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
                                -
                            </td>
                            <td className="px-6 py-4">
                            <Button onClick={done} color='basic' size='xs' className="text-sm">
                                회수
                            </Button>
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
                                -
                            </td>
                            <td className="px-6 py-4">
                            <Button onClick={done} color='basic' size='xs' className="text-sm">
                                회수
                            </Button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}