import { FC } from 'react';
import {
  ButtonStyle,
  ItemContainerStyle,
  ItemTitleBigStyle,
  ItemTitleSmallStyle,
} from './styles/stylesProjects';

const itemTitleSmall = 'Development';
const itemTitleBig =
  'Developing portfolio websites, current and previous portfolio ';

const SingleProject: FC = () => {
  return (
    <>
      <ItemContainerStyle>
        <ItemTitleSmallStyle>{itemTitleSmall}</ItemTitleSmallStyle>
        <ItemTitleBigStyle>{itemTitleBig}</ItemTitleBigStyle>
        <ButtonStyle>View details</ButtonStyle>
      </ItemContainerStyle>
    </>
  );
};

export default SingleProject;
