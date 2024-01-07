import { ReactNode } from 'react';

type Color = 'basic' | 'purple' | 'dark';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
	type?: 'submit' | undefined; // type이 undefined인 경우에는 'button'으로 지정
	color: Color;
	size: Size;
	className?: string; // 추가로 적용하고 싶은 className이 있을 경우 사용
	onClick?: () => void;
	children: ReactNode; // children 속성에는 string 뿐만 아니라 <svg> 요소가 포함될 수도 있어서 ReactNode 타입을 사용했다.
}

function Button({ type, color, size, className, onClick, children }: ButtonProps) {
	let combinedClassName = 'text-base rounded-lg shadow-md border';

	switch (color) {
		case 'basic': {
			combinedClassName += ' text-black border-purple-300 bg-transparent hover:bg-purple-200';
			break;
		}
		case 'purple': {
			combinedClassName += ' text-white border-white-300 bg-purple-400 hover:bg-purple-700';
			break;
		}
		case 'dark': {
			combinedClassName += ' text-white text-gray-900 border-gray-300 bg-gray-700 hover:bg-gray-900';
			break;
		}
	}

	switch (size) {
		case 'sm': {
			combinedClassName += ' py-2 px-4 font-medium';
			break;
		}
		case 'md': {
			combinedClassName += ' py-2 px-8 font-semibold';
			break;
		}
		case 'lg': {
			combinedClassName += ' py-2 px-12 font-semibold';
			break;
		}
	}

	return (
        <button type={type ? type : 'button' } className={`${combinedClassName} ${className}`} onClick={onClick}>
            {children}
        </button>
	);
}

export default Button;