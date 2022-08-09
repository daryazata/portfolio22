import styled from 'styled-components';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { COLORS } from '../../../globalStyles/colors';

// todo : why transform scale doesnt work when there is div around ?
export const AppBarItemTitle = styled.div`
  color: ${COLORS.WHITE};
  text-decoration: none;
  padding: 5px;
  padding-bottom: 20px;
  margin-right: 30px;
  font-family: 'Mulish', sans-serif;
  letter-spacing: 0.1rem;
  font-size: 1.1rem;
  font-weight: 600;

  display: inline;
  &:hover {
    border-bottom: 3px solid ${COLORS.THEME_BLUE};
    transform: scale(1.1);
  }
`;

export const styleAppBarItemTitle = {
  color: COLORS.WHITE,
  textDecoration: 'none',
  p: 5 / 8,
  pb: 20 / 8,
  mr: 30 / 8,
  fontFamily: 'Mulish, sans-serif',
  letterSpacing: '0.1rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  display: { md: 'inline', xs: 'block' },
  ':hover': {
    borderBottom: `3px solid ${COLORS.THEME_BLUE}`,
  },
};

export const AiFillLinkedinStyled = styled(AiFillLinkedin)`
  height: 28px;
  width: 28px;
  color: ${COLORS.GRAY_1};
  margin-right: 15px;
  &:hover {
    padding-top: -5px;
    cursor: pointer;
    color: ${COLORS.WHITE};
  }
`;

export const AiOutlineMailStyled = styled(AiOutlineMail)`
  height: 28px;
  width: 28px;
  color: ${COLORS.GRAY_1};
  &:hover {
    padding-top: -5px;
    cursor: pointer;
    color: ${COLORS.WHITE};
  }
`;

export const focusedStyle = {
  borderBottom: `3px solid ${COLORS.THEME_BLUE}`,
  color: COLORS.THEME_BLUE,
};
export const focusedMobileStyle = {
  borderBottom: `3.5px solid ${COLORS.BLUE_2}`,
  color: COLORS.BLUE_2,
};

export const styleContainerBox = {
  px: { md: 100 / 8 },
  pt: 2,
  pb: 20 / 8,
  display: { md: 'flex', xs: 'none' },
  alignItems: 'center',
  justifyContent: 'space-between',
  top: 0,
  zIndex: 999,
  position: 'sticky',
};

// MOBILE

export const styleContainerBoxMobile = {
  zIndex: 1999,
  position: 'fixed',
  width: '90vw',
  top: -2,
  right: 0,
  height: 70,
  bgcolor: COLORS.THEME_BG_BLACK,
  display: { xs: 'flex', md: 'none' },
  borderRadius: 1,
};

export const styleNavBarIcon = {
  padding: 20,
  marginRight: 10,
  height: 30,
  width: 30,
  color: COLORS.GRAY_1,
};

export const styleNavBarContainer = {
  zIndex: 1999,
  position: 'fixed',
  height: 3 * 65,
  top: 60,
  right: 0,
  bgcolor: COLORS.THEME_BG_BLACK,
  fontFamily: 'Poppins, sans-serif',
  fontSize: '1.0rem',
  fontWeight: 600,
  borderRadius: 1,
  px: '5vw',
  pt: 1,
};

export const styleNavBarItem = {
  height: 35,
  textDecoration: 'none',
  color: COLORS.GRAY_2,
  display: 'block',
  width: '80vw',
  letterSpacing: 1.1,
  pt: 2,
};
