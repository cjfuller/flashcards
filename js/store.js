//@flow

import {createStore} from "redux";

import _ from "./third_party/lodash.js";

import type {StoreType, ActionType} from "./types.js";
import {ActionTypes} from "./actions.js";

// TODO: mechanism for importing / exporting / editing card data.
import conjugationCardData from "./conjugation_data.js";
import vocabCardData from "./vocab_data.js";

const initialState: StoreType = {
    cards: conjugationCardData,
    loc: "home",
    cardIndex: 0,
    cardState: "front",
};

const reducers: {
    [action: string]: (state: StoreType, action: ActionType) => StoreType,
} = {};

reducers[ActionTypes.FlipCardT] = (state, action) => {
    return {
        ...state,
        cardState: state.cardState === "front" ? "back" : "front",
    };
};

reducers[ActionTypes.NextT] = (state, action) => {
    let newIndex = state.cardIndex + 1;
    if (newIndex >= state.cards.length) { newIndex = state.cards.length - 1; }
    return {
        ...state,
        cardIndex: newIndex,
    };
};

reducers[ActionTypes.PrevT] = (state, action) => {
    let newIndex = state.cardIndex - 1;
    if (newIndex < 0) { newIndex = 0; }
    return {
        ...state,
        cardIndex: newIndex,
    };
};

reducers[ActionTypes.ShuffleT] = (state, action) => {
    return {
        ...state,
        cards: _.shuffle(state.cards),
        cardIndex: 0,
    };
};

reducers[ActionTypes.CardKindT] = (state, action) => {
    return {
        ...state,
        cards: action.kind === "vocab" ? vocabCardData : conjugationCardData,
    };
};

const noOp = (x, y) => x;

const reducer = (state: StoreType | void, action: ActionType): StoreType => {
    if (window.debug) {
        console.log(action);  // eslint-disable-line no-console
    }
    if (state === undefined) {
        return initialState;
    } else {
        const handler = reducers[action.type] || noOp;
        return handler(state, action);
    }
};

const store = createStore(reducer);
export default store;
