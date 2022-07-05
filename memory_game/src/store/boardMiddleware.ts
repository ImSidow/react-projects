import type { RootState, AppDispatch } from '../store'
import { modifyRandomImages, addDataToEachMove } from './boardSlice'

export const revealImage = (payload: number) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(modifyRandomImages({ id: payload, shown: true }))

    let boardState = getState().board

    if (boardState.eachMove.length === 0) {
        dispatch(addDataToEachMove(boardState.modifiedImage))
    } else {
        setTimeout(() => {
            dispatch(addDataToEachMove(boardState.modifiedImage))
        }, 300);
    }
}