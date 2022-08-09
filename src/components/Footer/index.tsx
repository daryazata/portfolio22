import { FC } from 'react';
import { Box } from '@mui/material';

import {
  GithubIconStyled,
  IconBoxStyle,
  LinkedInIconStyled,
  MailIconStyled,
  styleContainerBox,
  YearText,
} from './styles/stylesFooter';
import { LINKS } from '../../globals';

const Footer: FC = () => {
  const dateYear = new Date().getFullYear();
  return (
    <Box sx={styleContainerBox}>
      <IconBoxStyle as={'a'} target='_blank' href={LINKS.LINKEDIN}>
        <LinkedInIconStyled />
      </IconBoxStyle>
      <IconBoxStyle as={'a'} href={LINKS.EMAIL}>
        <MailIconStyled />
      </IconBoxStyle>
      <IconBoxStyle as={'a'} target='_blank' href={LINKS.GITHUB}>
        <GithubIconStyled />
      </IconBoxStyle>
      <YearText>Made with 🍌 by Darya Zatakova, {dateYear}</YearText>
    </Box>
  );
};

export default Footer;
