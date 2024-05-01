import React from 'react';

const data = {
	title: {
		name: '반가워요! 어떻게 불러 드리면 될까요?',
		location: '자주 가는 지역을 골라주세요.',
		welcome:
			'환영해요 ! 반려동물이 있으시다면\n' +
			'반려동물의 프로필을 입력해주세요.',
	},
	description: {
		name: '마이페이지에서 언제든지 수정 가능해요.',
		location:
			'최대 3개 선택 가능\n' + '마이페이지에서 언제든지 수정 가능해요.',
		welcome: '',
	},
};

type TProps = {
	type: string;
};

function Title({type}: TProps) {
	return (
		<div>
			<h2 className={'whitespace-pre font-extrabold text-xl'}>
				{data.title[type]}
			</h2>
			<p className={'text-xs mt-2'}>{data.description[type]}</p>
		</div>
	);
}

export default Title;
