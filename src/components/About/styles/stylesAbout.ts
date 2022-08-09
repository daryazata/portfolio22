import styled from 'styled-components';
import { styleFlexDirectionGlobalMui } from '../../../globalStyles';
import { COLORS } from '../../../globalStyles/colors';
import {
  AppBarItemTitle,
  styleAppBarItemTitle,
} from '../../AppBar/styles/stylesAppBar';

export const AboutMeTitle = styled.p`
  color: ${COLORS.WHITE};
  font-family: 'Mulish', sans-serif;
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  @media (max-width: 770px) {
    font-size: 2.5rem;
  }
`;
export const AboutMeText = styled.p`
  color: ${COLORS.GRAY_1};
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  line-height: 1.9rem;
  margin-top: -15px;
  @media (max-width: 770px) {
    font-size: 0.9rem;
    line-height: 1.7rem;
    letter-spacing: 0.09rem;
  }
`;

export const MeImage = styled.img`
  height: 600px;
  background-blend-mode: screen;
  filter: grayscale(110%);
  border-radius: 1%;
  @media (max-width: 770px) {
    height: 60vh;
  }
`;

export const AboutItemTitle = styled(AppBarItemTitle)`
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const styleAboutItemTitle = {
  ...styleAppBarItemTitle,
  pb: 10 / 8,
  mb: 1,
  ':hover': {
    cursor: 'pointer',
  },
  textAlign: { xs: 'center' },
};

export const styleContainerBox = {
  p: { md: 100 / 8 },
  py: { xs: 6 },
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  ...styleFlexDirectionGlobalMui,
  bgcolor: COLORS.GRAY_3,
};

export const DetailsTitleStyle = styled.p`
  color: ${COLORS.GRAY_1};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.05rem;
  @media (max-width: 770px) {
    font-size: 0.95rem;
  }
`;
export const DetailsTextStyle = styled.p`
  color: ${COLORS.GRAY_1};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  margin-top: -10px;
  letter-spacing: 0.05rem;
  line-height: 1.6rem;
  @media (max-width: 770px) {
    font-size: 0.92rem;
    margin-top: -5px;
    line-height: 1.4rem;
  }
`;
