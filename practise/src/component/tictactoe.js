import React, { Component } from 'react'
class Tictactoe extends Component {
    constructor() {
        super()
        this.state = {
            mes: 'a'
        }
    }

    validate(ele) {
        console.log("h" + ele);
        if (this.state.mes === ele.target.value) {
            ele.target.value = "";

        }

        if (ele.target.value !== "X" &&
            ele.target.value !== "x" &&
            ele.target.value !== "O" &&
            ele.target.value !== "o"
        ) {
            ele.target.value = "";
        }
        else {
            this.validateKey(ele);
            this.state.mes = ele.target.value;
        }
    }

    validateKey(ele) {

        var character = ele.target.value;
        if (
            ele.target.id === '1' ||
            ele.target.id === '4' ||
            ele.target.id === '7' ||
            ele.target.id === '2' ||
            ele.target.id === '3' ||
            ele.target.id === '5' ||
            ele.target.id === '9'
        ) {
            var one = document.getElementById("1");
            var four = document.getElementById("4");
            var seven = document.getElementById("7");
            var two = document.getElementById("2");
            var three = document.getElementById("3");
            var five = document.getElementById("5");
            var nine = document.getElementById("9");
            if (
                (one.value === character &&
                    four.value === character &&
                    seven.value === character
                ) ||
                (one.value === character &&
                    two.value === character &&
                    three.value === character
                ) ||
                (one.value === character &&
                    five.value === character &&
                    nine.value === character
                )
            ) {
                alert(character + " won the game");
            }
        }
        if (
            ele.target.id === '1' ||
            ele.target.id === '2' ||
            ele.target.id === '3' ||
            ele.target.id === '4' ||
            ele.target.id === '5' ||
            ele.target.id === '6' ||
            ele.target.id === '7' ||
            ele.target.id === '8' ||
            ele.target.id === '9'
        ) {
            var one = document.getElementById("1");
            var two = document.getElementById("2");
            var three = document.getElementById("3");
            var four = document.getElementById("4");
            var five = document.getElementById("5");
            var six = document.getElementById("6");
            var seven = document.getElementById("7");
            var eight = document.getElementById("8");
            var nine = document.getElementById("9");
            if (
                (three.value === character &&
                    five.value === character &&
                    seven.value === character
                ) ||
                (two.value === character &&
                    five.value === character &&
                    eight.value === character
                ) ||
                (four.value === character &&
                    five.value === character &&
                    six.value === character
                )
            ) {
                alert(character + " won the game");
            }
        }
        if (
            ele.target.id === '1' ||
            ele.target.id === '3' ||
            ele.target.id === '5' ||
            ele.target.id === '6' ||
            ele.target.id === '7' ||
            ele.target.id === '8' ||
            ele.target.id === '9'
        ) {
            var one = document.getElementById("1");
            var three = document.getElementById("3");
            var five = document.getElementById("5");
            var six = document.getElementById("6");
            var seven = document.getElementById("7");
            var eight = document.getElementById("8");
            var nine = document.getElementById("9");

            if (
                (
                    three.value === character &&
                    six.value === character &&
                    nine.value === character
                ) ||
                (
                    seven.value === character &&
                    eight.value === character &&
                    nine.value === character
                )
            ) {
                alert(character + " won the game");
            }
        }

    }



    render() {
        return (

            <div>
                <table >
                    <tr>
                        <td>
                            <input id="1" type="text" onKeyUp={(e) => this.validate(e, '1')} />
                        </td>
                        <td>
                            <input id="2" type="text" onKeyUp={(e) => this.validate(e, '2')} />
                        </td>
                        <td>
                            <input id="3" type="text" onKeyUp={(e) => this.validate(e, '3')} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input id="4" type="text" onKeyUp={(e) => this.validate(e, '4')} />
                        </td>
                        <td>
                            <input id="5" type="text" onKeyUp={(e) => this.validate(e, '5')} />
                        </td>
                        <td>
                            <input id="6" type="text" onKeyUp={(e) => this.validate(e, '6')} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input id="7" type="text" onKeyUp={(e) => this.validate(e, '7')} />
                        </td>
                        <td>
                            <input id="8" type="text" onKeyUp={(e) => this.validate(e, '8')} />
                        </td>
                        <td>
                            <input id="9" type="text" onKeyUp={(e) => this.validate(e, '9')} />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Tictactoe
