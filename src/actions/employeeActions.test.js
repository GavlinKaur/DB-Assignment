
import * as actions from './employeeActions';

let emp = {
    "first_name": "test",
    "last_name": "test",
    "emailId": "gav@asdf.com",
    "age": 32,
    "gender": "male",
    "address": "222",
    "country": "India",
    "id": 107
};

let newEmp = {
    "id": 93,
    "first_name": "Keanu",
    "last_name": "Feil",
    "emailId": "Alysson_Heidenreich@hotmail.com",
    "gender": "Male",
    "age": 59,
    "address": "Suite 986",
    "country": "USA",
    "pin_code": "us-state"
};

describe('actions', () => {

    test('createemployee action', () => {
        expect(actions.createemployee(emp)).toEqual({ type: 'CREATE_NEW_EMPLOYEE', employee: emp })
    })

    test('fetchEmployees action', () => {
        expect(actions.fetchEmployeesSuccess(emp)).toEqual({ type: 'FETCH_EMPLOYEES', payload: emp })
    })


})

describe('actions', () => {

})