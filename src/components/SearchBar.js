import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'seth-rollins', label: 'Seth Rollins' },
  { value: 'roman-reigns', label: 'Roman Reigns' },
  { value: 'the-rock', label: 'The Rock' },
];

const handleSelect = (value, props) => props.select(value);

const SearchBar = (props) => (
  <Select
    className="w-1/2"
    onChange={(value) => handleSelect(value, props)}
    options={options}
  />
);

export default SearchBar;
