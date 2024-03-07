import {MapIcon} from '@/icons/default';
import {Icon, iType} from '@/style/icon';
import {GRAY_COLOR_90} from '@/style/theme';
import styled from 'styled-components';

interface IProps {
	title: string;
}

function SectionTitle({title}: IProps) {
	return (
		<_IconWrapper>
			<Icon size={'40px'} iType={iType.main} margin={'0 8px 0 0'}>
				{MapIcon}
			</Icon>
			<p>{title}</p>
		</_IconWrapper>
	);
}

export default SectionTitle;

const _IconWrapper = styled.div`
	display: flex;
	font-size: 24px;
	font-weight: 700;
	color: ${GRAY_COLOR_90};
	display: flex;
	align-items: center;
`;
