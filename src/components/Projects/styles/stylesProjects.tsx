import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../../globalStyles/colors';
import bgTestRose from '../../../assets/bg-test-rose.jpg';

export const ProjectsTitle = styled.p`
  color: ${COLORS.WHITE};
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 0.2rem;
  @media (max-width: 770px) {
    font-size: 2.5rem;
    margin-top: auto;
  }
`;

export const scaleAnimationIn = keyframes`
    from{
        transform: scale(1);
        color: ${COLORS.GRAY_1};
    }
    to{
        transform: scale(1.09);
        color: ${COLORS.GRAY_3};
        
    }
`;
export const scaleAnimationOut = keyframes`
    from{
        color: ${COLORS.GRAY_3};
        transform: scale(1.09);
    }
    to{
        transform: scale(1);
        color: ${COLORS.GRAY_1};
    }
`;

export const ItemContainerStyle = styled.div`
  font-family: 'Poppins', sans-serif;
  height: 580px;
  width: 380px;
  background: linear-gradient(rgba(29, 145, 235, 0.45), ${COLORS.THEME_YELLOW}),
    url(${bgTestRose});
  background-size: cover;
  margin: 17px;
  border-radius: 5px;
  color: ${COLORS.GRAY_1};
  animation: ${scaleAnimationOut} 0.4s ease-in-out forwards;
  &:hover {
    animation: ${scaleAnimationIn} 0.4s ease-in-out forwards;
    cursor: pointer;
  }

  @media (max-width: 770px) {
    height: 80vh;
    width: 90vw;
    margin-top: 30px;
  }
`;

export const ItemTitleSmallStyle = styled.p`
  padding-top: 70%;
  font-size: 1.1rem;
`;

export const ItemTitleBigStyle = styled.div`
  padding-top: 3%;
  width: 300px;
  margin: auto;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  @media (max-width: 770px) {
    font-size: 1.3rem;
  }
`;

export const ButtonStyle = styled.div`
  padding: 10px;
  width: 100px;
  margin: auto;
  margin-top: 35px;
  border-radius: 5px;
  color: ${COLORS.GRAY_1};
  border: 1px ${COLORS.GRAY_1} solid;
  &:hover {
    border: 1.5px ${COLORS.GRAY_3} solid;
    color: ${COLORS.GRAY_3};
  }
`;
