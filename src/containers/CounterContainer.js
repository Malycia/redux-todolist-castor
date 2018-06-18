import { connect } from 'react-redux';

import Counter from '~/components/Counter';

const mapStateToProps = (state, ownProps) => ({
  nbTasksNotDone: state.tasks.filter((currentTask => !currentTask.done)).length,
});

// connect : usine à composant React de type container
const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;
