import React, { Component } from "react";
import Base from "./base";
import { connect } from "react-redux";
import DigitButton from "./calculator/digitButton";
import ACTIONS from "../redux/actions";

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
                    <button className="btn-ac">AC</button>
                    <button onClick={() => this.props.delete()}>Del</button>
                    <button>/</button>
                    <DigitButton digit={"7"}/>
                    <DigitButton digit={"8"}/>
                    <DigitButton digit={"9"}/>
                    <button>*</button>
                    <DigitButton digit={"4"}/>
                    <DigitButton digit={"5"}/>
                    <DigitButton digit={"6"}/>
                    <button>-</button>
                    <DigitButton digit={"1"}/>
                    <DigitButton digit={"2"}/>
                    <DigitButton digit={"3"}/>
                    <button>+</button>
                    <DigitButton digit={"0"}/>
                    <DigitButton digit={'.'}/>
                    <button className="btn-equal">=</button>
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
