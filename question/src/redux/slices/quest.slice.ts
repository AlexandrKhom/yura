import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { questService } from '../../services';
import { AxiosError } from 'axios';
import { IQuest } from '../../types/quest.interface';
import { IQuestRes, IQuestsRes } from '../../types/response/quest.res';

interface IState {
    quests: IQuest[],
    questsCount: number,
    some:boolean,

}

const initialState: IState = {
    quests: [],
    some:true,
    questsCount: 0
};

const getAll = createAsyncThunk<IQuestsRes, void>(
    'questSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await questService.getAll();
            console.log('getAll alice = ', data)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const create = createAsyncThunk<IQuest, { quest: IQuest }>(
    'questSlice/create',
    async ({quest}, {rejectWithValue}) => {
        try {
            const {data} = await questService.create(quest);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);
const questSlice = createSlice({
    name: 'questSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.quests = action.payload.quests
                state.questsCount = action.payload.questsCount
            })
            .addCase(create.fulfilled, (state, action) => {
                state.quests.push(action.payload)
            })
});

const {reducer: questReducer} = questSlice;

const questActions = {
    create,
    getAll,
}

export {
    questActions,
    questReducer
}