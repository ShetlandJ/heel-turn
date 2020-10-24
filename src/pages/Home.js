import React from 'react';
import SearchBar from '../components/SearchBar';

function Home() {
  const selectWrestler = (value) => {
    console.log(value);
  };

  return (
    <div>
      <div>
        <p className="text-2xl">
          The HeelBook is a project to document the face/heel statuses of professional wrestlers over time.
        </p>

        <p className="mb-2">
          To get started, search for a wrestler or click browse to look through all wrestlers
        </p>
      </div>

      <div className="flex h-auto flex-grow justify-center">
        <SearchBar
          select={selectWrestler}
        />
      </div>
    </div>
  );
}

export default Home;
