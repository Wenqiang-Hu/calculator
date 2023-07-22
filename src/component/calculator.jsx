import React, { Component } from "react";
import Base from "./base";
import { connect } from "react-redux";
import DigitButton from "./calculator/digitButton";
import ACTIONS from "../redux/actions";
import OperationButton from "./calculator/operationButton";

class Calculator extends Component {
    state = {};
    render() {
        return (
            <Base>
                <div className="calculator">
                    <div className="output">
                        <div className="last-output">
                            {this.props.lastOperand}{this.props.operation}
                        </div>
                        <div className="current-output">
                            {this.props.currentOperand}
                        </div>
                    </div>
                    <button onClick={this.props.clear} className="btn-ac">AC</button>
                    <button onClick={() => this.props.delete()}>Del</button>
                    <OperationButton operation={"/"}/>
                    <DigitButton digit={"7"}/>
                    <DigitButton digit={"8"}/>
                    <DigitButton digit={"9"}/>
                    <OperationButton operation={"*"}/>
                    <DigitButton digit={"4"}/>
                    <DigitButton digit={"5"}/>
                    <DigitButton digit={"6"}/>
                    <OperationButton operation={"-"}/>
                    <DigitButton digit={"1"}/>
                    <DigitButton digit={"2"}/>
                    <DigitButton digit={"3"}/>
                    <OperationButton operation={"+"}/>
                    <DigitButton digit={"0"}/>
                    <DigitButton digit={'.'}/>
                    <button onClick={this.props.evaluate} className="btn-equal">=</button>
                </div>
            </Base>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
    };
};

const mapDispatchToProps = {
    delete: () =>{
        return {
            type: ACTIONS.DELETE_DIGIT
        }
    },
    clear: () => {
        return {
            type: ACTIONS.CLEAR
        }
    },
    evaluate: () => {
        return {
            type: ACTIONS.EVALUATE
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
