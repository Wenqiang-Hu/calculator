import ACTIONS from "./actions";

const reducer = (
    state = { currentOperand: "", lastOperand: "", operation: "" },
    action
) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            
            if (state.currentOperand === '0' && action.digit === '0')
                return state;
            if (state.currentOperand === '0' && action.digit !== '.')
                return {
                    ...state,
                    currentOperand: action.digit,
                }
            if (action.digit === '.' && state.currentOperand.includes('.'))
                return state;
            if (action.digit === '.' && state.currentOperand === ""){
                return {
                    ...state,
                    currentOperand: "0.",
                }
            }
             

            return {
                ...state,
                currentOperand: state.currentOperand + action.digit,
            }
        case ACTIONS.DELETE_DIGIT:
            if (state.currentOperand === "")
                return state;
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1)
            }
        default:
            return state
    }
};

export default reducer;
