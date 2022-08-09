import { FC } from 'react';
import { Box } from '@mui/material';

import {
  IconBoxStyle,
  LinkedInIconStyled,
  MailIconStyled,
  styleContainerBox,
  YearText,
} from './styles/stylesFooter';

const Footer: FC = () => {
  const dateYear = new Date().getFullYear();
  return (
    <Box sx={styleContainerBox}>
      <IconBoxStyle as={'a'} href='/'>
        <LinkedInIconStyled />
      </IconBoxStyle>
      <IconBoxStyle as={'a'} href='/'>
        <MailIconStyled />
      </IconBoxStyle>
      <YearText>Made with 🍌 by Darya Zatakova, {dateYear}</YearText>
    </Box>
  );
};

export default Footer;
