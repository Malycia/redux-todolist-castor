import { connect } from 'react-redux';

import Form from '~/components/Form';

const mapStateToProps = (state, ownProps) => ({
  inputValue: state.currentInputValue,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddTask: (evt) => {
    dispatch({ type: 'ADDTASK', valueNewTaskLabel: evt.target.children[0].value });
  },
  onInputChange: (evt) => {
    dispatch({ type: 'INPUTCHANGE', valueInputChange: evt.target.value });
  },
});

// connect : usine à composant React de type container
const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
