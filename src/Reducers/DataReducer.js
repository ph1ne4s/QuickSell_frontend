import { createReducer } from "@reduxjs/toolkit";
export const DataReducer = createReducer({}, {
    data_req: (state) => {
        state.loading = true;
    },
    data_suc: (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUser = action.payload.users;
    },
    data_fail: (state) => {
        state.loading = false;
        state.allTickets = []
        state.allUser = [];
    },
});
export const SelectDataReducer = createReducer({}, {
    sel_req: (state) => {
        state.loading = true;
        state.selectedData = [];
    },
    sel_suc: (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user
    },
    sel_fail: (state, action) => {
        state.loading = false;
        state.selectedData = []
        state.message = action.payload.message
    },
});