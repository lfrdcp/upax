export const SET_EMPLOYEES = 'SET_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const RESET_EMPLOYEES = 'RESET_EMPLOYEES';

export const setEmployeesAction = (payload) => {
    return {
        type: SET_EMPLOYEES,
        payload: payload,
    };
};

export const addEmployeeAction = (payload) => {
    return {
        type: ADD_EMPLOYEE,
        payload: payload,
    };
};

export const resetEmployeeAction = () => {
    return {
        type: RESET_EMPLOYEES,
    };
};
