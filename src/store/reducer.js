const initialState = {
  tasks: [],
};

const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    case 'ADDTASK': {
      return {
        ...currentState, tasks: [...currentState.tasks, newTask]
      };
    }
    default: return currentState;
  }
};

export default reducer;
