//@flow

import React from "react";
import {connect, Provider} from "react-redux";
import {StyleSheet, css} from "aphrodite";

import Card from "./card.jsx";
import Controls from "./controls.jsx";
import store from "./store.js";
import type {CardType, CardState} from "./types.js";

const Header = () => {
    return <div className={css(styles.headerText)}>
    </div>;
};

const emptyCard = {
    "front": "",
    "back": "",
};

class Page extends React.Component {
    props: {
        cards: CardType[],
        cardIndex: number,
        cardState: CardState,
        dispatch: Function,  // TODO: are there annotations for redux?
    };

    render() {
        return <div className={css(styles.page)}>
            <Header />
            <Card
                face={this.props.cardState}
                {...(this.props.cards[this.props.cardIndex] || emptyCard)}
            />
            <Controls
                currentCard={this.props.cardIndex}
                numCards={this.props.cards.length}
                dispatch={this.props.dispatch}
            />
        </div>;
    }
}

export default class ReduxPage extends React.Component {
    render() {
        const ConnectedPage = connect(s => s)(Page);
        return <Provider store={store}>
            <ConnectedPage />
        </Provider>;
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 32,
        textAlign: "center",
        width: "100%",
        marginBottom: 50,
    },
    page: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
    },
});
