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
  backgroundColor: 'lightgray',
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
  borderBottom: `2px solid ${COLORS.BLUE_2}`,
  color: COLORS.BLUE_2,
};

export const styleContainerBox = {
  px: { md: 100 / 8 },
  pt: 2,
  pb: 22 / 8,
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
  width: '101vw',
  top: 0,
  height: 55,
  bgcolor: COLORS.THEME_YELLOW_TRANS,
  display: { xs: 'flex', md: 'none' },
};

export const styleNavBarIcon = {
  padding: 11,
  marginRight: 10,
  height: 30,
  width: 30,
  color: COLORS.GRAY_1,
};

export const styleNavBarContainer = {
  zIndex: 1999,
  position: 'fixed',
  height: 3 * 57,
  width: '100%',
  top: 55,
  bgcolor: COLORS.THEME_YELLOW_TRANS,
  fontFamily: 'Poppins, sans-serif',
  fontSize: '1.3rem',
  fontWeight: 600,
  letterSpacing: 1.3,
};

export const styleNavBarItem = {
  height: 55,
  width: '100%',
  borderBottom: '0.3px solid ' + COLORS.GRAY_1,
  borderTop: '0.3px solid ' + COLORS.GRAY_1,
  textDecoration: 'none',
  color: COLORS.GRAY_1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
