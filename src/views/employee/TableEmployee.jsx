import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Card, Grid } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";

import useAxios from '../../hooks/useAxios';
import ProgressX from '../../components/ProgressX';
import { errorReadEmployees } from '../../data/errors';
import CardHeaderX from '../../components/card/CardHeaderX';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeesAction } from '../../redux/actions/employeeAction';
import moment from 'moment';

const TableEmployee = () => {
    const employeeReducer = useSelector((state) => state.employeeReducer);

    const dispatch = useDispatch();

    const [employees, setEmployees] = React.useState([]);
    const [search, setSearch] = React.useState("");

    // Para llevar a cabo las peticiones, se creo un customhook, el cual maneja
    // los errores http comunes, ademas de una barra de carga, asi como una 
    // alerta flotante llamada Snackbar, de esa manera solo pasamos los parametros necesarios
    // a la funcion apiAxios
    
    const {
        apiAxios,
        loading,
    } = useAxios('examen/employees/alfredo_castaneda');

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'First name', width: 350, },
        { field: 'last_name', headerName: 'Last name', width: 350, },
        { field: 'birthday', headerName: 'Birthday', width: 350, }
    ];

    const cancelSearch = () => {
        setSearch("");
        requestSearch(search);
    };

    const requestSearch = (searchedVal) => {
        const filteredEmployees = employeeReducer.employees.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setEmployees(filteredEmployees);
    };

    const convertAndFormatToDate = (date) => moment(date).format('YYYY-MM-DD')

    React.useEffect(() => {
        const success = (r) => {
            let auxEmployees = r.data.data.employees
            let employeesWithDate = auxEmployees.map((employee) => ({ ...employee, birthday: convertAndFormatToDate(employee.birthday) }) )
            dispatch(setEmployeesAction(employeesWithDate));
            setEmployees(employeesWithDate);
        };
        apiAxios('get', {}, success, errorReadEmployees);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Grid item sm={12} md={6} lg={6} >
            <Card>
                <CardHeaderX
                    titleX="Employee table"
                    subtitleX="You can filter by First Name"
                />
                <ProgressX show={loading} />
                <SearchBar
                    placeholder="Enter First Name"
                    value={search}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                />
                <div style={{ height: 640, width: '100%', marginTop: '20px' }}>
                    <DataGrid
                        rows={employees}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </Card>
        </Grid>
    )
}

export default TableEmployee
