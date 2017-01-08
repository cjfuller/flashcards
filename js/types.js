//@flow

export type CardState = "front" | "back";

export type StoreType = {
    cards: CardType[],
    cardIndex: number,
    cardState: CardState,
    loc: string,
};

export type ActionType = {type: string};

export type CardType = {
    front: string,
    back: string,
};
