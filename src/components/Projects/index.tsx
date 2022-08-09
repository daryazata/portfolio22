import { FC } from 'react';
import { Box } from '@mui/material';

import SingleProject from './SingleProject';
import { ProjectsTitle, styleProjectsContainer } from './styles/stylesProjects';

const projects = [
  { title: 'Project 1', text: 'This is my project 1' },
  { title: 'Project 2', text: 'This is my project 2' },
  { title: 'Project 3', text: 'This is my project 3' },
];

const displayProjects = projects.map((project, index) => {
  return <SingleProject key={index} />;
});

const ProjectsComponent: FC = () => {
  return (
    <Box
      id='projects-section'
      sx={{
        p: { md: 100 / 8 },
        pt: { xs: 8 },
        textAlign: 'center',
      }}
    >
      <ProjectsTitle>My Latest Projects</ProjectsTitle>
      <Box sx={styleProjectsContainer}>{displayProjects}</Box>
    </Box>
  );
};

export default ProjectsComponent;
