import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/system';

import { styleContainerBox, ToTopIconStyled } from './styles/ToTopStyles';

const ToTopComponent: FC = () => {
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
      <Box component={'a'} href='#home-section' sx={styleContainerBox}>
        <ToTopIconStyled />
      </Box>
    ) : (
      <></>
    );

  return displayComponent;
};

export default ToTopComponent;
