import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

import {
  focusedMobileStyle,
  styleContainerBoxMobile,
  styleNavBarContainer,
  styleNavBarIcon,
  styleNavBarItem,
} from './styles/stylesAppBar';

const AppBarMobile: FC = () => {
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

  const homeFocused = scrollPosition < 401 ? focusedMobileStyle : {};
  const aboutFocused =
    scrollPosition >= 401 && scrollPosition < 1448 ? focusedMobileStyle : {};

  const projectFocused = scrollPosition >= 1448 ? focusedMobileStyle : {};

  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <div>
      <Box sx={styleContainerBoxMobile}>
        <Box sx={{ flex: 1 }}></Box>
        {!showSideMenu && (
          <HiMenu
            onClick={() => setShowSideMenu(true)}
            style={styleNavBarIcon}
          />
        )}
        {showSideMenu && (
          <MdClose
            onClick={() => setShowSideMenu(false)}
            style={styleNavBarIcon}
          />
        )}
      </Box>
      {/* menu items  */}
      {showSideMenu && (
        <Box sx={styleNavBarContainer}>
          <Box
            style={homeFocused}
            component={'a'}
            href='#home-section'
            sx={styleNavBarItem}
          >
            Home
          </Box>
          <Box
            style={aboutFocused}
            component={'a'}
            href='#about-section'
            sx={styleNavBarItem}
          >
            About
          </Box>
          <Box
            style={projectFocused}
            component={'a'}
            href='#projects-section'
            sx={styleNavBarItem}
          >
            Projects
          </Box>
        </Box>
      )}
    </div>
  );
};

export default AppBarMobile;
