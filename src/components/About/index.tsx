import { Box } from '@mui/material';
import { FC, useState } from 'react';
import mePhoto from '../../assets/me_photo.png';
import { focusedStyle } from '../AppBar/styles/stylesAppBar';
import DetailsComponent from './DetailsComponent';
import {
  AboutMeText,
  AboutMeTitle,
  MeImage,
  styleAboutItemTitle,
  styleContainerBox,
} from './styles/stylesAbout';

const aboutMeTitleText = 'About Me';
const aboutMeTextText = `
I am a Javascript / Typescript Developer from Berlin. I like to with JS based libraries and frameworks. The main framework I have been working with is React. I have work also with React Native. 
`;

const skillSection = [
  {
    title: 'SKILL React Development 1',
    text: ' 1 I develop React Applications from scratch or maintain existing ones',
  },
];
const experienceSection = [
  {
    title: 'EXPERIENCE React Development 1',
    text: ' 1 I develop React Applications from scratch or maintain existing ones',
  },
];

const AboutComponent: FC = () => {
  const [visibleSection, setVisibleSection] = useState([true, false, false]);

  const handleSelectSection = (section: number) => {
    switch (section) {
      case 1:
        setVisibleSection([true, false, false]);
        break;
      case 2:
        setVisibleSection([false, true, false]);
        break;
      case 3:
        setVisibleSection([false, false, true]);
        break;
    }
  };

  return (
    <Box id='about-section' sx={styleContainerBox}>
      <MeImage src={mePhoto} />

      <Box
        sx={{
          px: { md: 10, xs: 5 },
          width: { md: 500, xs: 300 },
        }}
      >
        <AboutMeTitle>{aboutMeTitleText}</AboutMeTitle>
        <AboutMeText>{aboutMeTextText}</AboutMeText>
        <Box
          sx={styleAboutItemTitle}
          style={visibleSection[0] ? focusedStyle : {}}
          onClick={() => handleSelectSection(1)}
        >
          Main Skills
        </Box>
        <Box
          sx={styleAboutItemTitle}
          style={visibleSection[1] ? focusedStyle : {}}
          onClick={() => handleSelectSection(2)}
        >
          Experience
        </Box>
        <Box
          sx={styleAboutItemTitle}
          style={visibleSection[2] ? focusedStyle : {}}
          onClick={() => handleSelectSection(3)}
        >
          Education
        </Box>
        <DetailsComponent visible={visibleSection[0]} details={skillSection} />
        <DetailsComponent
          visible={visibleSection[1]}
          details={experienceSection}
        />
      </Box>
    </Box>
  );
};

export default AboutComponent;
