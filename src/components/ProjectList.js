import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';

function ProjectList({ project }) {
  const projectColumns = [[], [], []];
  let column = 0;

  for (let index = 0; index < project.length; index += 1) {
    const element = project[index];
    if (column === 3) column = 0;
    projectColumns[column].push(element);
    column += 1;
  }

  console.log(project);

  return (
    <div className='img-box'>
      <div className='img-colum'>
        {projectColumns[0].map((o) => {
          return (
            <img
              className='img-item'
              src={o.img}
              key={uuidv4()}
              alt={o.img}
              data-category={o.category}
            />
          );
        })}
      </div>

      <div className='img-colum'>
        {projectColumns[1].map((o, index) => {
          return (
            <img
              className='img-item'
              src={o.img}
              key={uuidv4()}
              alt={o.img}
              data-category={o.category}
            />
          );
        })}
      </div>

      <div className='img-colum'>
        {projectColumns[2].map((o, index) => {
          return (
            <img
              className='img-item'
              src={o.img}
              key={uuidv4()}
              alt={o.img}
              data-category={o.category}
            />
          );
        })}
      </div>
    </div>
  );
}

ProjectList.propTypes = {
  project: PropTypes.array,
};

export default ProjectList;
