import { createSlice } from "@reduxjs/toolkit";

import images from "../components/img/Index";
const availableImages = Object.keys(images);

type ImageType = { id: number, svg: React.ReactNode, shown: boolean, matched: boolean, uuid: string };

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const randomImages = (arr: string[]): ImageType[] => {
    let arrayOfImages: ImageType[] = [];

    arr.forEach((element, index) => {
        // let svg;
        // if (index == 13) {
        //     svg = { id: arrayOfImages.length, svg: images[element], shown: false, matched: false, uuid: uid() };
        // } else {
        //     svg = { id: arrayOfImages.length, svg: images[element], shown: true, matched: true, uuid: uid() };
        // }

        let svg = { id: arrayOfImages.length, svg: images[element], shown: false, matched: false, uuid: uid() };
        arrayOfImages.push(svg);
        arrayOfImages.push({ ...svg, id: arrayOfImages.length });
    })
    return arrayOfImages.sort(() => 0.5 - Math.random());
};

type initialStateType = {
    randomImages: ImageType[],
    moves: number,
    pairMatched: number,
    allMatched: boolean,
    eachMove: ImageType[],
    modifiedImage: ImageType | undefined,
}

const initialState: initialStateType = {
    randomImages: randomImages(availableImages),
    moves: 0,
    pairMatched: 0,
    allMatched: false,
    eachMove: [],
    modifiedImage: undefined
}

export const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        modifyRandomImages: (state, { payload }) => {
            let modifiedImage;
            state.randomImages = state.randomImages.map((value) => {
                if (value.id == payload.id) {
                    modifiedImage = { ...value, ...payload }
                    return modifiedImage
                }
                return value
            })
            state.modifiedImage = modifiedImage
        },

        incrementMoves: state => {
            state.moves += 1
        },

        incrementPairMatched: state => {
            state.pairMatched += 1
        },

        addDataToEachMove: (state, { payload }) => {
            let found = state.eachMove.find(value => value.id === payload.id)

            if (!found && !payload.matched) {
                state.eachMove.push(payload)
                if (state.eachMove.length === 2) {
                    boardSlice.caseReducers.isMatched(state)
                }
            }
        },

        isMatched(state) {
            let [firstMove, secondMove] = state.eachMove
            let result = firstMove.uuid === secondMove.uuid
            if (!result) {
                state.eachMove.forEach(element => {
                    boardSlice.caseReducers.modifyRandomImages(state, { payload: { id: element.id, shown: false }, type: '' })
                });
            } else {
                state.eachMove.forEach(element => {
                    boardSlice.caseReducers.modifyRandomImages(state, { payload: { id: element.id, shown: true, matched: true }, type: '' })
                });
                boardSlice.caseReducers.incrementPairMatched(state)
                boardSlice.caseReducers.allMatched(state)
            }
            state.eachMove = []
            boardSlice.caseReducers.incrementMoves(state)
        },

        allMatched: state => {
            let found = state.randomImages.find(value => value.matched === false)
            state.allMatched = found ? false : true
        },

        reset: state => {
            state.pairMatched = 0
            state.moves = 0
            state.allMatched = false
            state.eachMove = []
            state.randomImages = randomImages(availableImages)
        },

        endGame: state => {
            let remainedMove = 15 - state.pairMatched
            state.pairMatched += remainedMove
            state.moves += remainedMove

            // state.allMatched = true
            state.eachMove = []
            state.randomImages = state.randomImages.map(val => {
                val.matched = true
                val.shown = true
                return val
            })
        }
    }
});

export const { modifyRandomImages, addDataToEachMove, reset, endGame } = boardSlice.actions
export type { ImageType }
export default boardSlice.reducer