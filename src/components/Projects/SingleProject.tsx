import { FC } from 'react';
import {
  ButtonStyle,
  ItemContainerStyle,
  ItemTitleBigStyle,
  ItemTitleSmallStyle,
} from './styles/stylesProjects';

import { Box } from '@mui/material';

type Props = {
  imageUrl: string;
  item: {
    title: string;
    descr: string;
    link?: string;
  };
};

const SingleProject: FC<Props> = ({ imageUrl, item }) => {
  return (
    <>
      <ItemContainerStyle imageUrl={imageUrl}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              mx: 4,
              mt: 20,
              mb: { xs: 4, md: 8 },
            }}
          >
            <ItemTitleSmallStyle>{item.title}</ItemTitleSmallStyle>
            <ItemTitleBigStyle>{item.descr}</ItemTitleBigStyle>
          </Box>
          {item.link && (
            <Box>
              <ButtonStyle>
                <Box
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    ':active': {
                      color: 'inherit',
                    },
                  }}
                  component={'a'}
                  href={item.link}
                  target='_blank'
                >
                  View in Play Store
                </Box>
              </ButtonStyle>
            </Box>
          )}
        </Box>
      </ItemContainerStyle>
    </>
  );
};

export default SingleProject;
