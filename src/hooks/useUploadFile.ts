/* eslint-disable no-unused-vars */
import {ChangeEvent, useState} from 'react';

const useUploadFile: () => [
	Array<string | ArrayBuffer | undefined | null>,
	(e: ChangeEvent<HTMLInputElement>) => void,
	(idx: number) => void,
] = () => {
	const [uploadedFiles, setUploadedFiles] = useState<
		Array<string | ArrayBuffer | undefined | null>
	>([]);

	const handleUploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files as FileList;
		const uploadedFile = files[0];
		const reader = new FileReader();

		reader.onload = (e) => {
			setUploadedFiles([...uploadedFiles, e.target?.result]);
		};

		reader.readAsDataURL(uploadedFile);
	};

	const handleDeleteFile = (index: number) => {
		const newFiles = uploadedFiles.filter((_, idx) => idx !== index);
		setUploadedFiles(newFiles);
	};

	return [uploadedFiles, handleUploadFiles, handleDeleteFile];
};

export default useUploadFile;
