//@flow

import React from "react";
import {StyleSheet, css} from "aphrodite";

import type {CardType, CardState} from "./types.js";

export default class Card extends React.Component {
    props: {
        face: CardState,
    } & CardType;

    render() {
        return <div className={css(styles.cardContainer)}>
            <div className={css(styles.cardText)}>
                {this.props.face === "front" ?
                    this.props.front : this.props.back}
            </div>
        </div>;
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "1px solid black",
        boxShadow: "5px 5px 5px #ddd",
        width: 500,
        height: 300,
    },
    cardText: {
        fontSize: 24,
    },
});
