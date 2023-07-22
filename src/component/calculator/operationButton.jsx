import React, { Component } from "react";
import ACTIONS from "../../redux/actions";
import { connect } from "react-redux";

class OperationButton extends Component {
    state = {};
    render() {
        return (
            <button
                onClick={() =>
                    this.props.choose_operation(this.props.operation)
                }
            >
                {this.props.operation}
            </button>
        );
    }
}

const mapDispatchToProps = {
    choose_operation: (operand) => {
        return {
            type: ACTIONS.CHOOST_OPERATION,
            operand: operand,
        };
    },
};
export default connect(null, mapDispatchToProps)(OperationButton);
