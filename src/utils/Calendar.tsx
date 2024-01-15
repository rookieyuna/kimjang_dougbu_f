import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import {ko} from 'date-fns/esm/locale'
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    const [dateRange, setDateRange] = useState([new Date(), null]);
    const [startDate, endDate] = dateRange;
    // const [endDate, setEndDate] = useState<Date | null>(new Date());
    return (
        <div className="relative">
            <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setDateRange(date)}
                showIcon // 달력그림
                locale= {ko} // 한글
                isClearable // 지우기용
                dateFormat= "yyyy년 MM월 dd일"
                monthsShown={2} // 2개월 보여줌
                showMonthDropdown
                useShortMonthInDropdown
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                minDate={new Date('2014-01-01')} // minDate 이전 날짜 선택 불가
                placeholderText="날짜를 선택하세요"
                className="items-center bg-gray-50 border border-gray-300 p-1"
                icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipSApplication0">
                        <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                          <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                          <path
                            fill="#fff"
                            d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                          ></path>
                        </g>
                      </mask>
                      <path
                        fill="currentColor"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSApplication0)"
                      ></path>
                    </svg>
                  }
            />

            {/* 1번 시도 */}
            {/* <DatePicker
                showIcon
                locale= {ko} // 한글
                isClearable
                dateFormat= "yyyy년 MM월 dd일"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                minDate={new Date('2014-01-01')} // minDate 이전 날짜 선택 불가
                className="flex items-center"
                placeholderText="종료날짜"
            /> */}


            {/* 2번 시도 */}
            {/* <DatePicker selected={startDate} 
                        onChange={(date) => setStartDate(date)}
                        locale="ko"
                        className="flex items-center">
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
            </DatePicker> */}
        </div>
    );
};

export default Calendar;