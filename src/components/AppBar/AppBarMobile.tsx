import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

import {
  AiFillLinkedinStyled,
  AiOutlineMailStyled,
  focusedMobileStyle,
  GithubIconTopStyled,
  styleContainerBoxMobile,
  styleNavBarContainer,
  styleNavBarIcon,
  styleNavBarItem,
} from './styles/stylesAppBar';
import { LINKS } from '../../globals';

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

  const homeFocused = scrollPosition < 371 ? focusedMobileStyle : {};
  const aboutFocused =
    scrollPosition >= 371 && scrollPosition < 1268 ? focusedMobileStyle : {};

  const projectFocused = scrollPosition >= 1268 ? focusedMobileStyle : {};

  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <div>
      <Box sx={styleContainerBoxMobile}>
        <Box sx={{ flex: 1, ml: '22px' }}>
          <Box component={'a'} target='_blank' href={LINKS.LINKEDIN}>
            <AiFillLinkedinStyled />
          </Box>
          <Box component={'a'} href={LINKS.EMAIL}>
            <AiOutlineMailStyled />
          </Box>
          <Box component={'a'} target='_blank' href={LINKS.GITHUB}>
            <GithubIconTopStyled />
          </Box>
        </Box>
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
