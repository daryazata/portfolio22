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
I'm a JavaScript / TypeScript developer from Berlin. Since I wrote my bachelor thesis about a fullstack single-page application in 2019, I have worked on various projects in JS/ TS ecosystem. I mainly work on front-end projects, but I'm also interested in back-end development.

`;

const skillSection = [
  {
    title: 'React / React Native',
    text: `The majority of the projects I've worked on have been React / RN projects. `,
  },
  {
    title: 'TS / JS',
    text: `I mostly write in TS nowadays. Time after time I still have a delightful encounter with JS 🫶🏼 . `,
  },
];
const experienceSection = [
  {
    title: 'Hybrid Heroes',
    text: 'Development and maintenance of cross-platform apps. Techstack: React Native/ Typescript (Ionic/ Angular)',
  },
  {
    title: 'Incloud',
    text: 'Development and maintenance of web apps. Techstack: React, Node / Typescript, GraphQL',
  },
  {
    title: 'Web Development since 2018',
    text: 'I started to work in web development in 2018. In that time I worked with PHP, Bootstrap and MSSQL.  ',
  },
];
const educationSection = [
  {
    title: 'HTW Berlin 2021',
    text: 'In 2021 I graduated in Environmental Computer Science B.Sc. It was an interesting study mix of environmental and CS subjects.',
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
        <DetailsComponent
          visible={visibleSection[2]}
          details={educationSection}
        />
      </Box>
    </Box>
  );
};

export default AboutComponent;
