import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import {
  AiFillLinkedinStyled,
  AiOutlineMailStyled,
  focusedStyle,
  styleAppBarItemTitle,
  styleContainerBox,
} from './styles/stylesAppBar';
import AppBarMobile from './AppBarMobile';
import { COLORS } from '../../globalStyles/colors';

const AppBar: FC = () => {
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

  const backgroundColor = scrollPosition > 100 ? COLORS.GRAY_3 : COLORS.GRAY_2;

  const homeFocused = scrollPosition < 721 ? focusedStyle : {};
  const aboutFocused =
    scrollPosition >= 721 && scrollPosition < 1521 ? focusedStyle : {};

  const projectFocused = scrollPosition >= 1521 ? focusedStyle : {};

  return (
    <>
      <AppBarMobile />
      <Box
        sx={styleContainerBox}
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <Box>
          <Box
            sx={styleAppBarItemTitle}
            style={homeFocused}
            component={'a'}
            href='#home-section'
          >
            Home
          </Box>

          <Box
            sx={styleAppBarItemTitle}
            style={aboutFocused}
            component={'a'}
            href='#about-section'
          >
            About
          </Box>

          <Box
            sx={styleAppBarItemTitle}
            style={projectFocused}
            component={'a'}
            href='#projects-section'
          >
            Projects
          </Box>
        </Box>
        <Box>
          <AiFillLinkedinStyled />
          <AiOutlineMailStyled />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
