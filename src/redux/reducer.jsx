import ACTIONS from "./actions";

const reducer = (
    state = { currentOperand: "", lastOperand: "", operation: "" },
    action
) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...state,
                currentOperand: state.currentOperand + action.digit,
            }
        default:
            return state
    }
};

export default reducer;
