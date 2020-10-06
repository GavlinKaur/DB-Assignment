import employeeReducer from './employeeReducer';

const appReducer = (state = [], action) => {
    return {
        employees: employeeReducer(state.employees, action),
    }
};

export default appReducer