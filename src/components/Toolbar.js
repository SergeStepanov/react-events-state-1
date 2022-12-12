import React from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className='filter-btn-box'>
      {filters.map((o) => {
        return (
          <button
            key={uuidv4()}
            className={'filter-btn' + (selected === o ? ' selected' : '')}
            data-filter={o}
            onClick={() => onSelectFilter(o)}>
            {o}
          </button>
        );
      })}
    </div>
  );
}

// Toolbar.propTypes = {
//   filters: PropTypes.array,
//   selected: PropTypes.string,
//   onSelectFilter: PropTypes.func,
// };

export default Toolbar;
