import ACTIONS from "./actions";

const evaluate = state => {
    let {currentOperand, lastOperand, operation} = state;

    const current = parseFloat(currentOperand);
    const last = parseFloat(lastOperand);

    let res = "";
    switch (operation) {
        case "+":
            res = last + current
            break;
        case "-":
            res = last - current
            break;
        case "*":
            res = last * current
            break;
        case "/":
            res = last / current
            break;
        default:
            break;
    }
    return res.toString()

}

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
        case ACTIONS.CHOOST_OPERATION:
            if (state.currentOperand === "" && state.lastOperand === ""){
                return state 
            }
            if (state.lastOperand === "")
                return {
                    ...state,
                    lastOperand: state.currentOperand,
                    operation: action.operand,
                    currentOperand: "",
                }
            if (state.currentOperand === "")
                return {
                    ...state,
                    operation: action.operand,
                }
            return {
                ...state,
                lastOperand: evaluate(state),
                operation: action.operand,
                currentOperand: "",
            }
        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOperand: "",
                lastOperand: "",
                operation: "",
            }
        default:
            return state
    }
};

export default reducer;
