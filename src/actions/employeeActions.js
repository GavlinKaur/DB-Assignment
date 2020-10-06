import * as actionTypes from '../constants/actionTypes';
import EmployeeService from "../services/EmployeeService";


export const createemployee = (employee) => {
    return {
        type: actionTypes.CREATE_NEW_EMPLOYEE,
        employee
    }
};

// Sync Action
export const fetchEmployeesSuccess = (employees) => {
    return {
        type: actionTypes.FETCH_EMPLOYEES,
        payload: employees
    }
};


//Async Action
export const fetchEmployees = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time

    return (dispatch) => {
        // Returns a promise
        EmployeeService.getEmployees()
            .then(employeesResponse => {
                // Dispatch another action
                // to consume data
                dispatch(fetchEmployeesSuccess(employeesResponse.data))
            })
            .catch(error => {
                console.log(error);
            })


    };
};

export const deleteEmployee = (employee) => {

    return (dispatch) => {
        // Returns a promise
        EmployeeService.deleteEmployee(employee)
            .then(employeesResponse => {
                // Dispatch another action
                // to consume data
                return EmployeeService.getEmployees()
                    .then(employeesResponse => {
                        // Dispatch another action
                        // to consume data
                        dispatch(fetchEmployeesSuccess(employeesResponse.data))
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })


    };
}

//Async Action
export const newEmployee = (employee) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time


    return (dispatch) => {
        // Returns a promise
         return EmployeeService.createEmployee(employee)
            .then(employeesResponse => {
                // Dispatch another action
                // to consume data
                console.log(employeesResponse);
                return EmployeeService.getEmployees()
                    .then(employeesResponse => {
                        // Dispatch another action
                        // to consume data
                        dispatch(fetchEmployeesSuccess(employeesResponse.data))
                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(error => {
                console.log(error);
            })


    };
};