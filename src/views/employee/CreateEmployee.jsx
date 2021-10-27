import React from 'react'
import { useForm } from 'react-hook-form';

import { DatePicker } from "@material-ui/pickers";
import PersonIcon from '@material-ui/icons/Person';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'

import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { useDispatch, useSelector } from 'react-redux';

import ProgressX from '../../components/ProgressX'
import TextFieldX from '../../components/TextFieldX';
import ButtonSubmitX from '../../components/ButtonSubmitX';
import CardHeaderX from '../../components/card/CardHeaderX';
import SnackbarX from '../../components/SnackbarX';

import useAxios from '../../hooks/useAxios';
import { firstAndSecondNameRule } from '../../data/rules';
import { errorCreateEmployee } from '../../data/errors';

import { addEmployeeAction } from '../../redux/actions/employeeAction';


const CreateEmployee = () => {
    const dispatch = useDispatch();
    const employeeReducer = useSelector((state) => state.employeeReducer);
    const { register, errors, handleSubmit, reset  } = useForm();
    const [date, setDate] = React.useState(new Date());
    const formatDate = (date) => moment(date).format('YYYY/MM/DD')

    // Para llevar a cabo las peticiones, se creo un customhook, el cual maneja
    // los errores http comunes, ademas de una barra de carga, asi como una 
    // alerta flotante llamada Snackbar, de esa manera solo pasamos los parametros necesarios
    // a la funcion apiAxios
    
    const {
        apiAxios,
        loading,
        snackbar,
        setSnackbar,
        handleClose
    } = useAxios('examen/employees/alfredo_castaneda');

    const onSubmit = (data, e) => {
        e.preventDefault();
        let params = { ...data,
            id: employeeReducer.employees.length + 1,
            birthday: formatDate(date)
        }

        const successResponse = (response) => {
            reset()
            dispatch(addEmployeeAction(params));
            setSnackbar({
                openX: true,
                messageX: 'Employee created successfully',
                typeX: 'success',
            });
        }
        
        apiAxios('post', params, successResponse, errorCreateEmployee);
    };
    
    return (
        <Grid item sm={12} md={6} lg={6} >
            <SnackbarX data={snackbar} handleClose={handleClose} />
            <Card>
                <CardHeaderX
                    titleX="Create an employee"
                    subtitleX="Enter the necessary data to create an employee"
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent>

                        <TextFieldX
                            error={errors?.name?.message}
                            name="name"
                            typeField="text"
                            label="Name*"
                            componentIcon={PersonIcon}
                            validations={register({ ...firstAndSecondNameRule })}
                        />

                        <TextFieldX
                            error={errors?.last_name?.message}
                            name="last_name"
                            typeField="text"
                            label="Last Name*"
                            componentIcon={PersonIcon}
                            validations={register({ ...firstAndSecondNameRule })}
                        />
                        <Divider />
                        <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
                            <Typography variant="subtitle2">Enter the date of your birthday</Typography>
                            <DatePicker
                                autoOk
                                orientation="landscape"
                                variant="static"
                                openTo="date"
                                value={date}
                                onChange={setDate}
                                format="YYYY-MM-DD"
                            />
                        </MuiPickersUtilsProvider>
                        <ProgressX show={loading} />
                        <ButtonSubmitX text="Create employee" />
            
                    </CardContent>
                </form>
            </Card>
        </Grid>
    )
}

export default CreateEmployee
