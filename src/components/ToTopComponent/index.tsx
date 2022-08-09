import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { MdArrowUpward } from 'react-icons/md';

import { styleContainerBox } from './styles/ToTopStyles';

const ToTopComponent: FC = () => {
  const ToTopIconStyled = styled(MdArrowUpward)`
    height: 30px;
    width: 30px;
  `;
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const displayComponent =
    scrollPosition > 300 ? (
      <Box component={'a'} href='#' sx={styleContainerBox}>
        <ToTopIconStyled />
      </Box>
    ) : (
      <></>
    );

  return displayComponent;
};

export default ToTopComponent;
