import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface QuoteState {
    quote: string;
    name: string;
    email: string;
    date: Date;
    generatedQuotes: string[]; // Assuming an array of strings for generated quotes
    id: number;
  }
const initialState:QuoteState = {
    quote: "Hello World!",
    name: "Foo Bar",
    email: "foo@baz.com",
    date: new Date(Date.now()),
    generatedQuotes: [],
    id: 0
};

const quoteSlice = createSlice({
    name:"quote",
    initialState,
    reducers:{
        //functions
        
    },
    extraReducers:(builder) => {
        builder.addCase(generateQuote.fulfilled,(state,action)=>{
            state.quote = action.payload.quote;
            state.date = action.payload.date;
        })
    }
})

export const generateQuote = createAsyncThunk(
    'quote/generateQuote',
    async (_) => {
      const randomNum = Math.floor(Math.random() * (110 - 1)) + 1;
      try {
          const response = await fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`);
          const data = await response.json();
          console.log(data.quotes[randomNum])
          return { quote : data.quotes[randomNum], date: new Date() };
      }
      catch (error:any) {
        console.error(error)
      }
    }
  );


export default quoteSlice.reducer