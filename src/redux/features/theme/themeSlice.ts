// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     darkMode: false,
// };

// const themeSlice = createSlice({
//     name: "theme",
//     initialState,
//     reducers: {
//         toggleTheme: (state) => {
//             state.darkMode = !state.darkMode;
//         },
//     },
// });

// export const { toggleTheme } = themeSlice.actions;
// export default themeSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: true
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// type TInitialState = {
//     mode: "light" | "dark";
// };
// const initialState: TInitialState = {
//     mode: "light",
// };

// const themeSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         setTheme: (state, action) => {
//             state.mode = action.payload;
//         },
//     },
// });

// export const { setTheme } = themeSlice.actions;
// export default themeSlice.reducer;
