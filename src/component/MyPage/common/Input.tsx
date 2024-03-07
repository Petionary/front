import {GRAY_COLOR_40, GRAY_COLOR_90} from '@/style/theme';
import {ComponentPropsWithoutRef} from 'react';
import styled from 'styled-components';

interface IProps extends ComponentPropsWithoutRef<'input'> {
	label: string;
}

function Input({label, ...rest}: IProps) {
	return (
		<InputBox>
			<LabelText>{label}</LabelText>
			<StyledInput {...rest}></StyledInput>
		</InputBox>
	);
}

export default Input;

const InputBox = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 50px 56px 50px;
`;
const LabelText = styled.p`
	color: ${GRAY_COLOR_90};
	font-size: 15px;
`;
const StyledInput = styled.input`
	width: 225px;
	height: 44px;
	padding: 0 15px;
	border: none;
	border-bottom: 1px solid ${GRAY_COLOR_40};
	background-color: transparent;
	outline: none;
`;
