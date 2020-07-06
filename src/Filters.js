import React from 'react';
import styled from 'styled-components';
import TextInput from './components/TextInput';

const mediumScreen = `@media (max-width: 830px)`;
const smallScreen = `@media (max-width: 430px)`;

const FilterRow = styled.div`
  padding: 30px;
  font-size: 24px;
  display: flex;

  ${mediumScreen} {
    flex-direction: column;
  }
`;

const Filters = ({
  name,
  setNameFilter
}) => (
  <FilterRow>
    <TextInput label="Search:" value={name} onChange={setNameFilter} />
  </FilterRow>
);

export default Filters;
