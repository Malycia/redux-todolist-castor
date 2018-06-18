import { getMax } from '~/utils/data';

const initialState = {
  tasks: [],
  currentInputValue: '',
};


const reducer = (currentState = initialState, action = {}) => {
  // je récupère cette info via le FormContainer (mapDispatchToProps)
  const maxId = getMax(currentState.tasks);
  const newLabel = action.valueNewTaskLabel;
  const newTask = {
    id: maxId + 1,
    label: newLabel,
    done: false,
  };
  const newInput = action.valueInputChange;
  switch (action.type) {
    case 'ADDTASK': {
      return { ...currentState, tasks: [...currentState.tasks, newTask] };
    }
    case 'INPUTCHANGE': {
      return { ...currentState, currentInputValue: newInput };
    }
    default: return currentState;
  }
};

export default reducer;
