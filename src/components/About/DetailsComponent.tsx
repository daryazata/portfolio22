import { FC, Fragment } from 'react';
import { Box } from '@mui/system';
import { DetailsTextStyle, DetailsTitleStyle } from './styles/stylesAbout';

type Props = {
  details: {
    title: string;
    text: string;
  }[];
  visible: boolean;
};
const DetailsComponent: FC<Props> = ({ details, visible }) => {
  const displayDetails = details.map((detail, index) => {
    return (
      <Fragment key={index}>
        <DetailsTitleStyle>{detail.title}</DetailsTitleStyle>
        <DetailsTextStyle>{detail.text}</DetailsTextStyle>
      </Fragment>
    );
  });

  const visibleComponent = visible ? 'block' : 'none';

  return (
    <Box sx={{ p: { md: 3, xs: 1 }, pl: 1, display: visibleComponent }}>
      {displayDetails}
    </Box>
  );
};

export default DetailsComponent;
