import PropTypes from 'prop-types';
import { SectionSt, TitleStyled } from 'components/Section/Section.styled';

export const Section = ({ title, children  }) => {
  return (
  <SectionSt>
    <TitleStyled>{ title }</TitleStyled>
    {children}
  </SectionSt>
  )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};