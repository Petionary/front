import React from 'react';

function Head() {
	return (
		<React.Fragment>
			<title>Petionary Project</title>
			<meta
				content={'width=device-width, initial-scale=1'}
				name={'viewport'}
			/>
			<meta
				name={'description'}
				content={'반려견에 대한 프로젝트 입니다.'}
			/>
			<link rel={'icon'} href='/mdi_pets.svg' />
		</React.Fragment>
	);
}

export default Head;
