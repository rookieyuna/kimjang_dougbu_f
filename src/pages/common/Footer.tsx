
export default function Footer () {
    const currentDay = new Date();
    const currentYear = currentDay.getFullYear();

    return (
    <footer className="text-gray-700 body-font w-full mx-auto border-t fixed bottom-0">
        <div className="bg-gray-200">
          <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} 동부세탁소
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              경기도 부천시 역곡동
            </span>
          </div>
          <div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Developed by 장반장, 지슈슈
            </span>
          </div>
        </div>
      </footer>
    )
}