import React from 'react';

type TProps = {
	children: React.ReactNode;
	bgColor: string;
	className?: string;
};

export function SummaryContainer({children, bgColor, className}: TProps) {
	return (
		<div className={`flex justify-center w-full ${bgColor}`}>
			<div
				className={`flex flex-col justify-center w-3/5 min-w-max min-h-[645px] ${className}`}
			>
				{children}
			</div>
		</div>
	);
}
