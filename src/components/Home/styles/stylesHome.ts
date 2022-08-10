import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../../globalStyles/colors';

export const WelcomeText = styled.p`
  color: ${COLORS.GRAY_1};
  font-size: 3.5rem;
  font-family: 'Mulish', sans-serif;
  letter-spacing: 0.7rem;
  @media (max-width: 770px) {
    font-size: 1.5rem;
  }
`;

export const WelcomeTextName = styled.p`
  font-family: 'Bungee', cursive;
  color: ${COLORS.WHITE};
  line-height: 1.5rem;
  letter-spacing: 0.2rem;
`;

const vanishToTop = (translateY: number) => keyframes`
  0% { opacity:1.0 }
  30% { opacity:1.0 }
  75% { transform : translateY(-${translateY}px);
      opacity:0.0 }
  100% {opacity:0} `;

const vanishToTop2 = (translateY: number) => keyframes`
  0% { opacity:0.0 }
  30% { transform : translateY(-${translateY}px); opacity:0.5 }
  60% { opacity:1.0; transform : translateY(${translateY}px) }
  100% { opacity:1.0 } `;

export const WelcomeTextDeveloper = styled.p`
  font-family: 'Bungee', cursive;
  color: ${COLORS.THEME_BLUE};
  line-height: 1.2rem;
  letter-spacing: 0.25rem;
  animation: ${vanishToTop(15)} 2s linear infinite;

  @media (max-width: 770px) {
    animation: ${vanishToTop(10)} 2s linear infinite;
  }
`;

export const WelcomeTextDeveloper2 = styled.p`
  font-family: 'Bungee', cursive;
  color: ${COLORS.THEME_YELLOW};
  line-height: 1.2rem;
  letter-spacing: 0.25rem;
  animation: ${vanishToTop2(15)} 5s linear infinite;
  position: absolute;
  bottom: 222px;
  opacity: 0;
  @media (max-width: 770px) {
    bottom: 111px;
    animation: ${vanishToTop2(10)} 5s linear infinite;
  }
`;

export const WelcomeTextBase = styled.p`
  font-family: 'Mulish', sans-serif;
  font-weight: 900;
  color: ${COLORS.WHITE};
  letter-spacing: 0.25rem;
  margin-top: -30px;
  @media (max-width: 770px) {
    margin-top: -25px;
  }
`;

export const styleContainerBox = {
  px: { md: 100 / 8, xs: 3 },
  py: { md: 110 / 8, xs: 10 },
  pb: { xs: 7 },
  bgcolor: COLORS.GRAY_2,
  position: 'relative',
  fontSize: { md: '4rem', xs: '2rem' },
};
