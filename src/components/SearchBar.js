import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'seth-rollins', label: 'Seth Rollins' },
  { value: 'roman-reigns', label: 'Roman Reigns' },
  { value: 'the-rock', label: 'The Rock' },
];

const SearchBar = () => (
  <Select className="w-1/2" options={options} />
);

export default SearchBar;
