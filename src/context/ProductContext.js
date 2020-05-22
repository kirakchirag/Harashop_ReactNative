import createDataContext from './createDataContext';
import API from '../api/harashop_api';

const proudctReducer = (state, action) => {
  switch (action.type) {
    case 'show_products':
      return {...state, products: action.payload};
    case 'product_searched':
      return {...state, searched_product: action.payload};
    default:
      return state;
  }
};

const showProducts = (dispatch) => async () => {
  const response = await API.get('/products/all');
  dispatch({type: 'show_products', payload: response.data});
};

const searchProducts = (dispatch) => async ({term, foundor}) => {
  const response = await API.get(`/search/${term}`);
  dispatch({type: 'product_searched', payload: response.data});
  foundor();
};

export const {Provider, Context} = createDataContext(
  proudctReducer,
  {showProducts, searchProducts},
  {searched_product: [], products: []},
);
