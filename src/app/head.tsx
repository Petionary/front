import React from 'react';

/**************************************************
 * 브라우저 Tab 부분
 **************************************************/
const data = {
	title: 'Petionary Project',
	content: '반려견에 대한 프로젝트 입니다.',
	iconRef: '/mdi_pets.svg',
};

function Head() {
	return (
		<React.Fragment>
			<title>{data.title}</title>
			<meta
				content={'width=device-width, initial-scale=1'}
				name={'viewport'}
			/>
			{/*내용에 관한 부분입니다.*/}
			<meta name={'description'} content={data.content} />
			{/*아이콘에 관한 부분입니다.*/}
			<link rel={'icon'} href={data.iconRef} />
		</React.Fragment>
	);
}

export default Head;
