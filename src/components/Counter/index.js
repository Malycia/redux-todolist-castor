import React from 'react';
import PropTypes from 'prop-types';

import './counter.styl';

const Counter = ({ nbTasksNotDone }) => {
  let message = '';
  switch (nbTasksNotDone) {
    case 0:
      message = 'Aucune tâche';
      break;

    case 1:
      message = '1 tâche en cours';
      break;

    default:
      message = `${nbTasksNotDone} tâches en cours`;
  }

  return (
    <div className="todo-counter">
      {message}
    </div>
  );
};

Counter.propTypes = {
  nbTasksNotDone: PropTypes.number.isRequired,
};

export default Counter;
