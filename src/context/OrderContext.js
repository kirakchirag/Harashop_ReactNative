import createDataContext from './createDataContext';
import {navigate} from '../navigationRef';
import API from '../api/harashop_api';

const orderReducer = (state, action) => {
  switch (action.type) {
    case 'add_order':
      return {...state, order: [...state.order, action.payload]};
    case 'submit_order':
      return {...state, order: []};
    case 'show_order':
      return {...state, orders: [action.payload]};
    default:
      return state;
  }
};

const addOrder = (dispatch) => async (order) => {
  dispatch({type: 'add_order', payload: order});
};

const submitOrder = (dispatch) => async ({order, totalprice}) => {
  try {
    await API.post('/orders', {order, totalprice});
    dispatch({type: 'submit_order'});
    navigate('orderConfirmed', {message: 'success'});
  } catch (err) {
    navigate('orderConfirmed', {message: 'fail'});
  }
};

const showOrders = (dispatch) => async () => {
  try {
    const response = await API.get('/orders');
    dispatch({type: 'show_order', payload: response.data});
  } catch (err) {
    console.log('errr!!!');
  }
};
export const {Provider, Context} = createDataContext(
  orderReducer,
  {addOrder, submitOrder, showOrders},
  {orders: [], order: []},
);
