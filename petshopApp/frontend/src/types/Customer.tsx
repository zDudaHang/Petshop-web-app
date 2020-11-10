// CREATE A TYPE FOR EACH QUERY OR MUTATION

export interface Customer {
    id: number;
    name: string;
    birthDate: string;
    debt: number;
}

// TYPE FOR QUERY: CUSTOMERS
export interface CustomersResult {
    customer: Customer[];
}

// TYPE FOR QUERY: CUSTOMER
export interface CustomerResult {
    customer: Customer;
}

export interface CustomersByNameLikeResult {
    customersByNameLike: Customer[];
}

// TYPE FOR MUTATION: UPDATE_CUSTOMER
export interface UpdateCustomerResult {
    updatePerson: Customer;
}

// TYPE FOR MUTATION: CREATE_CUSTOMER
export interface CreateCustomerResult {
    newPerson: Customer;
}
