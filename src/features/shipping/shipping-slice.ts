import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShippingPayload {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface ShippingState {
  shipping: ShippingPayload;
}

const initialState: ShippingState = {
  shipping: {} as ShippingPayload,
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    addShippingDetails: (state, action: PayloadAction<ShippingPayload>) => {
      state.shipping = (action.payload);
    },
    emptyShippingDetails: (state) => {
      state.shipping = {} as ShippingPayload;
    }
  },
});


export const { addShippingDetails, emptyShippingDetails } = shippingSlice.actions;

export default shippingSlice.reducer


