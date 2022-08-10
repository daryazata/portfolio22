import { MdArrowUpward } from 'react-icons/md';
import styled from 'styled-components';
import { COLORS } from '../../../globalStyles/colors';

export const styleContainerBox = {
  backgroundColor: COLORS.THEME_YELLOW_TRANS,
  position: 'fixed',
  bottom: 0,
  right: 0,
  p: 1.3,
  px: 1.5,
  borderRadius: 15,
  m: 3,
  color: COLORS.WHITE,
  ':active': {
    color: COLORS.WHITE,
  },
};

export const ToTopIconStyled = styled(MdArrowUpward)`
  height: 30px;
  width: 30px;
`;
