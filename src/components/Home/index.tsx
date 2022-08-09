import { Box } from '@mui/material';
import {
  styleContainerBox,
  WelcomeText,
  WelcomeTextBase,
  WelcomeTextDeveloper,
  WelcomeTextDeveloper2,
  WelcomeTextName,
} from './styles/stylesHome';

const welcomeText = 'Welcome to my world';
const welcomeTextName = `Hi, I'm Darya,`;
const welcomeTextDeveloper = `JS Developer`;
const welcomeTextDeveloper2 = ` TS Developer`;
const welcomeTextBase = `based in Berlin.`;

const HomeComponent = () => {
  return (
    <Box id='home-section' sx={styleContainerBox}>
      <WelcomeText>{welcomeText.toLocaleUpperCase()}</WelcomeText>
      <WelcomeTextName>{welcomeTextName}</WelcomeTextName>
      <WelcomeTextDeveloper>{welcomeTextDeveloper}</WelcomeTextDeveloper>

      <WelcomeTextDeveloper2>{welcomeTextDeveloper2}</WelcomeTextDeveloper2>

      <WelcomeTextBase>{welcomeTextBase}</WelcomeTextBase>
    </Box>
  );
};

export default HomeComponent;
