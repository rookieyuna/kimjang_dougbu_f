
import logo from '../../assets/img/logo_temp.jpeg';
import { Link } from 'react-router-dom';

export default function Header () {
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
                    작업물
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
                </nav>
            </div>
      </header>
    )
}   