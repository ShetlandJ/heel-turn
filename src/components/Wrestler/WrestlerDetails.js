import React from 'react';
import PropTypes from 'prop-types';

function WrestlerDetails({ wrestler }) {
  return (
    <div>
      {wrestler}
    </div>
  );
}

WrestlerDetails.propTypes = {
  wrestler: PropTypes.string.isRequired,
};

export default WrestlerDetails;
