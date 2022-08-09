import styled, { keyframes } from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { COLORS } from '../../../globalStyles/colors';

export const highlightAnimationIn = keyframes`

from {
    margin-bottom: 0px;
    border: 2px solid ${COLORS.GRAY_2};
}
to{
    margin-bottom: 10px;
    background-color: ${COLORS.THEME_BLUE};
    border: 2px solid ${COLORS.THEME_BLUE};
}
`;

export const highlightAnimationOut = keyframes`

from {
    margin-bottom: 10px;
    background-color: ${COLORS.THEME_BLUE};
    border: 2px solid ${COLORS.THEME_BLUE};
}
to{
    margin-bottom: 0px;
    border: 2px solid ${COLORS.GRAY_2};
}
`;

export const LinkedInIconStyled = styled(FaLinkedinIn)`
  height: 24px;
  width: 24spx;
  color: ${COLORS.GRAY_2};
  padding: 8px;
  padding-left: 13px;
  padding-right: 13px;
`;

export const MailIconStyled = styled(AiOutlineMail)`
  height: 24px;
  width: 24spx;
  color: ${COLORS.GRAY_2};
  padding: 8.5px;
  padding-left: 13px;
  padding-right: 13px;
`;

export const IconBoxStyle = styled.div`
  border: 2px solid ${COLORS.GRAY_2};
  border-radius: 30px;
  margin-right: 25px;
  animation: ${highlightAnimationOut} 0.4s ease-in-out forwards;
  &:hover {
    animation: ${highlightAnimationIn} 0.4s ease-in-out forwards;
    cursor: pointer;
  }
  @media (max-width: 770px) {
    display: none;
  }
`;

export const YearText = styled.p`
  color: ${COLORS.GRAY_1};
  font-family: 'Mulish', sans-serif;
  letter-spacing: 0.08rem;
  margin-left: 20px;
  @media (max-width: 770px) {
    margin: auto;
    letter-spacing: 0.05rem;
  }
`;

export const styleContainerBox = {
  bgcolor: COLORS.GRAY_3,
  height: { md: 130, xs: 90 },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
