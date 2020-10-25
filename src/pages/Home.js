import React from 'react';
import SearchBar from '../components/SearchBar';
import WrestlerDetails from '../components/Wrestler/WrestlerDetails';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wrestler: null,
    };
  }

  selectWrestler = ({ value }) => {
    // Go make the data call to get the data from the wrestler

    const response = value;

    this.setState({
      wrestler: response,
    });
  };

  render() {
    const { wrestler } = this.state;

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
            select={this.selectWrestler}
          />
        </div>

        {wrestler && (
        <WrestlerDetails
          wrestler={wrestler}
        />
        )}

      </div>
    );
  }
}

export default Home;
