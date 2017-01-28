//@flow

import React from "react";
import {StyleSheet, css} from "aphrodite";

import {Actions} from "./actions.js";

class Button extends React.Component {
    static defaultProps: {action: () => void, disabled: boolean};

    props: {
        disabled: boolean,
        text: string,
        action: () => void,
    };

    render() {
        return <button
            className={css(styles.button)}
            disabled={this.props.disabled}
            onClick={this.props.action}
        >
            {this.props.text}
        </button>;
    }
}

Button.defaultProps = {
    action: () => undefined,
    disabled: false,
};


export default class Controls extends React.Component {
    props: {
        dispatch: Function,
        numCards: number,
        currentCard: number,
    };

    flipCard() {
        this.props.dispatch(Actions.flipCard());
    }

    nextCard() {
        this.props.dispatch(Actions.nextCard());
    }

    prevCard() {
        this.props.dispatch(Actions.prevCard());
    }

    shuffle() {
        this.props.dispatch(Actions.shuffle());
    }

    showConjugations() {
        this.props.dispatch(Actions.switchCardKind("conjugation"));
    }

    showVocab() {
        this.props.dispatch(Actions.switchCardKind("vocab"));
    }

    render() {
        return <div className={css(styles.controlBar)}>
            <Button text="Flip all cards" action={() => this.flipCard()} />
            <Button
                text="Next"
                disabled={this.props.currentCard >= this.props.numCards - 1}
                action={() => this.nextCard()}
            />
            <Button
                text="Previous"
                disabled={this.props.currentCard === 0}
                action={() => this.prevCard()}
            />
            <Button text="Shuffle and restart" action={() => this.shuffle()} />
            <Button
                action={() => this.showConjugations()}
                text="Load conjugations"
            />
            <Button
                action={() => this.showVocab()}
                text="Load vocab"
            />
        </div>;
    }
}

const controlHeight = 50;

const styles = StyleSheet.create({
    button: {
        border: "1px solid #ccc",
        boxShadow: "2px 2px 2px #ddd",
        ':not(:last-of-type)': {
            marginRight: 5,
        },
        height: controlHeight,
        backgroundColor: "white",
        width: 100,
        ':active': {
            backgroundColor: "#d2d4ea",
        },
    },
    controlBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: 500,  // TODO: share with card
        height: controlHeight,
        marginTop: 20,
    },
});
