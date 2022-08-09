import { FC } from 'react';
import { Box } from '@mui/material';

import SingleProject from './SingleProject';
import { ProjectsTitle, styleProjectsContainer } from './styles/stylesProjects';
import rbb24ScreenShot from '../../assets/rbb_24.webp';
import leasingScreenShot from '../../assets/leasing.webp';
import handsScreenShot from '../../assets/hands.png';

const rbb24 = {
  title: 'Development',
  descr: `
  Implementation of new UI Design for RBB 24 App,
  cross-platform development with React Native
`,
  link: 'https://play.google.com/store/apps/details?id=de.rbb.rbb24&gl=US',
};

const leasingM = {
  title: 'Maintenance',
  descr: `
  Maintanance of the LeasingMarkt App,
  bug-fixes and feature developement 
`,
  link: 'https://play.google.com/store/apps/details?id=de.leasingmarkt.app',
};

const vol_planner = {
  title: 'Developent',
  descr: `
  Implementation of the new UI for the Volunteer Planner platform. Techstack: Python/ Django (Backend), React, MUI (Frontend), WIP 🔨
  
  `,
};

const ProjectsComponent: FC = () => {
  return (
    <Box
      id='projects-section'
      sx={{
        p: { md: 100 / 8 },
        py: { xs: 8 },
        textAlign: 'center',
      }}
    >
      <ProjectsTitle>My Latest Work</ProjectsTitle>
      <Box sx={styleProjectsContainer}>
        <SingleProject item={vol_planner} imageUrl={handsScreenShot} />
        <SingleProject item={leasingM} imageUrl={leasingScreenShot} />
        <SingleProject item={rbb24} imageUrl={rbb24ScreenShot} />
      </Box>
    </Box>
  );
};

export default ProjectsComponent;
