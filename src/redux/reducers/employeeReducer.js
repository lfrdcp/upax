import {
    SET_EMPLOYEES,
    RESET_EMPLOYEES,
    ADD_EMPLOYEE
} from '../actions/employeeAction';

const data = {
    employees: []
};

const userReducer = (state = data, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
            };
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };
        case RESET_EMPLOYEES:
            return data;
        default:
            return state;
    }
};

export default userReducer;
