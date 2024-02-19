import { createSlice } from "@reduxjs/toolkit";

export const markdownSlice = createSlice({
    name: "markdown",
    initialState: {
        mardownText: "",
        preview: "",
        example: "Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\nLeave 2 spaces at the end of a line to do a line break.\n\nText attributes *italic*, **bold**, `monospace`, ~~strikethrough~~.\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in Spain."
    },
    reducers: {
        updateMarkdown: (state, action) => {
            state.mardownText = action.payload;
        },
        updatePreview: (state, action) => {
            state.preview = action.payload;
        },

        help: (state, action) => {
            state.markdownText = state.example
            state.preview = action.payload;
        }
    }
})
export const { updateMarkdown, updatePreview, help } = markdownSlice.actions;
export default markdownSlice.reducer;