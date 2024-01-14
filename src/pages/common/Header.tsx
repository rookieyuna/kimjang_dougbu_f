
import logo from '../../assets/img/logo_temp.jpeg';
import { Link } from 'react-router-dom';
import Button from "../../utils/Button";
import dayjs from 'dayjs';

export default function Header () {
    const currentDate = dayjs(new Date());

    const logout = () =>{
        console.log('logout')
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                >
                    <img alt="logo" src={logo} className="w-8 h-8 -mr-1" />
                    <Link to="/">
                        <span className="ml-3 text-xl text-indigo-500">동부세탁소</span>
                    </Link>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <div className="mr-5 hover:text-gray-900">
                        <Link to="/work">작업물</Link>
                    </div>
                    <div className="mr-5 hover:text-gray-900">
                    회원
                    </div>
                    <div className="mr-5 hover:text-gray-900">
                    통계
                    </div>
                    <div className="mr-5 hover:text-gray-900">
                    관리
                    </div>
                    <div className="mr-5 hover:text-gray-900">
                        <Link to="/register">접수(임시)</Link>
                    </div>
                    <div className="mr-5 hover:text-gray-900">
                        {dayjs(currentDate).format('YYYY-MM-DD dddd')}
                    </div>
                    {/* <Button onClick={logout} color='basic' size='sm'>
                        로그아웃
                    </Button> */}
                    <button onClick={logout} //bg-gray-700
                        className="select-none rounded-lg bg-indigo-400 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase 
                        text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] 
                        focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        로그아웃
                    </button>
                </nav>
            </div>
      </header>
    )
}   