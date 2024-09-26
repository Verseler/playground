import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type CounterState = {
  count: number;
}

const initialState: CounterState = {
  count: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<{amount: number, isPositive: boolean}>) => {
      //consuming multiple payload
      const isPositive = action.payload.isPositive
      if (!isPositive) {
        state.count += Math.abs(action.payload.amount)
      }

      state.count += action.payload.amount
    },
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  },
  //add created async actions
  extraReducers: (builder) => {
    builder
    .addCase(incrementAsync.pending, () => {
      console.log("incrementAsync pending")
    })
    .addCase(incrementAsync.fulfilled, (state, action) => {
      state.count += action.payload
    })
  }
});

//defining an asyncronous action
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    //sample async action
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return amount;
  }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;