import styled from 'styled-components';

interface IProps {
	title: string;
}

function SectionTitle({title}: IProps) {
	return <StyledHeader>{title}</StyledHeader>;
}

export default SectionTitle;

const StyledHeader = styled.h2`
	font-size: 20px;
	width: 80%;
	margin: 30px 0;
`;
