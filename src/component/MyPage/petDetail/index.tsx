'use client';
import SectionTitle from '../common/SectionTitle';
import SelectBox from '../common/SelectBox';
import Input from '../common/Input';
import {IPet} from '@/types/common';
import ProfileImage from '../common/ProfileImage';

import useUploadFile from '@/hooks/useUploadFile';
import {ChangeEvent, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {oPetGender, oPetSpecies} from '@/utils/option';

interface IProps {
	pet?: IPet;
}

function PetDetail({pet}: IProps) {
	const [editToggle, setEditToggle] = useState(pet === undefined);
	const [petInput, setPetInput] = useState<IPet>({
		petName: pet?.petName || '',
		petBirth: pet?.petBirth || '',
		petGender: pet?.petGender || 'MALE',
		petSpecies: pet?.petSpecies || 'DOG',
		speciesDetail: pet?.speciesDetail || '',
		imgUrl: pet?.imgUrl || '',
		content: pet?.content || '',
	});
	const [uploadedFile, handleUploadedFile] = useUploadFile();
	const {push} = useRouter();

	const handleInputChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const {name, value} = e.target;

		setPetInput({...petInput, [name]: value});
	};

	const handleEditToggle = () => {
		setEditToggle(!editToggle);
	};

	console.log(petInput);

	const handleSaveChange = () => {
		if (pet) {
			// 반려동물 상세 페이지일 떄 로직
			// 변경사항이 있으면 변경 사항을 put
		} else {
			// 반려동물 추가 페이지일 때 로직
			// 반려동물 인풋 -> 새로운 반려동물 추가 (post)
			// 추가에 성공하면 반려동물 목록 페이지로 이동
		}
		handleEditToggle();
	};

	useEffect(() => {
		if (uploadedFile.length)
			setPetInput({
				...petInput,
				imgUrl: uploadedFile[uploadedFile.length - 1] as string,
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [uploadedFile.length]);

	return (
		<section className='w-full pl-[83px] overflow-y-scroll flex flex-col'>
			<div className='w-full mt-[40px]'>
				<SectionTitle title='My Pet' />
				<div className='w-[866px] mt-[40px] bg-white overflow-y-scroll flex p-[40px]'>
					<ProfileImage
						profileURL={petInput?.imgUrl}
						editable={editToggle}
						onChangeProfileImage={handleUploadedFile}
						type='pet'
					/>
					<div className='px-[63px] w-full'>
						<div className='flex'>
							<Input
								label='이름'
								width='sm'
								name='petName'
								value={petInput.petName}
								onChange={handleInputChange}
								disabled={!editToggle}
							/>
							<SelectBox
								label='성별'
								name='petGender'
								value={petInput.petGender}
								onChange={handleInputChange}
								disabled={!editToggle}
								options={oPetGender}
							/>
						</div>
						<Input
							label='생년월일'
							type='date'
							name='petBirth'
							value={petInput.petBirth}
							onChange={handleInputChange}
							disabled={!editToggle}
						/>
						<div className='flex'>
							<SelectBox
								label='구분'
								name='petSpecies'
								value={petInput.petSpecies}
								onChange={handleInputChange}
								disabled={!editToggle}
								options={oPetSpecies}
							/>
							<Input
								label='상세 구분'
								width='sm'
								name='speciesDetail'
								value={petInput.speciesDetail}
								onChange={handleInputChange}
								disabled={!editToggle}
							/>
						</div>
						<label className='text-[15px] w-full'>
							<p className='ml-[40px] mb-[8px] '>상세 정보</p>
							<textarea
								name='content'
								value={petInput.content}
								onChange={handleInputChange}
								className='border p-[12px] w-[90%] h-[190px] ml-[40px] border-gray_40 resize-none'
								disabled={!editToggle}
							/>
						</label>
						<div className='flex w-full justify-end mt-[40px]'>
							<button
								onClick={() => push('/mypage/pet')}
								className='w-[72px] mx-[10px] h-[38px] rounded-[4px] bg-wh border border-secondary text-secondary text-[15px] cursor-pointer'
							>
								닫기
							</button>
							<button
								onClick={
									editToggle
										? handleSaveChange
										: handleEditToggle
								}
								className='w-[72px] mx-[10px] h-[38px] rounded-[4px] bg-wh border border-secondary text-secondary text-[15px] cursor-pointer'
							>
								{editToggle ? '저장' : '수정'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PetDetail;
