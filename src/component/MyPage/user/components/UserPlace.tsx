import styled from 'styled-components';
import SectionTitle from '../../common/SectionTitle';

function UserPlace() {
	return (
		<SectionContainer>
			<SectionTitle title='My Place' />
		</SectionContainer>
	);
}

export default UserPlace;

const SectionContainer = styled.section`
	width: 100%;
`;
