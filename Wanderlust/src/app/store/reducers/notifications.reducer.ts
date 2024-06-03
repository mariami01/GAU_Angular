import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, clearCart } from '../actions/cart.actions';
import { Apartment } from '../../apartment/apartment.service';

export interface CartItem {
  apartment: Apartment;
  roomDetails: any[];
}

export const initialState: CartItem[] = [];

const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { apartment, roomDetails }) => [...state, { apartment, roomDetails }]),
  on(removeFromCart, (state, { apartmentId }) => state.filter(item => item.apartment.id !== apartmentId)),
  on(clearCart, state => [])
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}