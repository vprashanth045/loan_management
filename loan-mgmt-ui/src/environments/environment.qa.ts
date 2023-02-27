export const environment = {
  production: false,
  BASE_URL: 'http://localhost:4000',
  CUSTOMER: {
    GET_ALL_CUSTOMERS: 'list',
    GET_CUSTOMER: 'view',
    UPDATE_CUSTOMER: 'update',
    DELETE_CUSTOMER: 'delete',
    DELETE_MULTIPLE_CUSTOMERS: 'delete-multiple',
    SEARCH_CUSTOMERS: 'search',
  },
  LOAN: {
    GET_ALL_LOANS: 'list',
    GET_LOAN: 'view',
    UPDATE_LOAN: 'update',
    DELETE_LOAN: 'delete',
    SEARCH_LOANS: 'search',
  },
};

// BASE_URL + CUSTOMER.GET_ALL_CUSTOMERS
