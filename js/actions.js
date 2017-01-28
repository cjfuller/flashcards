//@flow

import type {CardKind} from "./types.js"

const FlipCardT = "FLIP_CARD";
const NextT = "NEXT";
const PrevT = "PREV";
const ShuffleT = "SHUFFLE";
const CardKindT = "CARD_KIND";

export const ActionTypes = {FlipCardT, NextT, PrevT, ShuffleT, CardKindT};

function flipCard() {
    return {
        type: FlipCardT,
    };
}

function nextCard() {
    return {
        type: NextT,
    };
}

function prevCard() {
    return {
        type: PrevT,
    };
}

function shuffle() {
    return {
        type: ShuffleT,
    };
}

function switchCardKind(newKind: CardKind) {
    return {
        type: CardKindT,
        kind: newKind,
    };
}

export const Actions = {flipCard, nextCard, prevCard, shuffle, switchCardKind};
