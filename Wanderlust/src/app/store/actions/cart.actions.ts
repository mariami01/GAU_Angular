import { createAction, props } from '@ngrx/store';
import { Apartment } from '../../apartment/apartment.service';

export const addToCart = createAction(
    '[Cart] Add Item',
    props<{ apartment: Apartment, roomDetails: any[] }>()
);

export const removeFromCart = createAction(
    '[Cart] Remove Item',
    props<{ apartmentId: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');