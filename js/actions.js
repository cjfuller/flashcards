//@flow

const FlipCardT = "FLIP_CARD";
const NextT = "NEXT";
const PrevT = "PREV";
const ShuffleT = "SHUFFLE";

export const ActionTypes = {FlipCardT, NextT, PrevT, ShuffleT};

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

export const Actions = {flipCard, nextCard, prevCard, shuffle};
