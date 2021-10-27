import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Grid,
  Container,
  CardContent,
  Divider,
} from '@material-ui/core';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

import { emailRule, passwordRule } from '../../../data/rules';

import TextFieldX from '../../../components/TextFieldX';
import TextFieldPasswordX from '../../../components/TextFieldPasswordX';
import SnackbarX from '../../../components/SnackbarX';
import ButtonSubmitX from '../../../components/ButtonSubmitX';
import GridCenterX from '../../../components/GridCenterX';
import ProgressX from '../../../components/ProgressX';
import AvatarCircle from '../../../components/avatar/AvatarCircle';
import CardTrans from '../../../components/card/CardTrans';
import LogoAuth from '../../../components/logoAuth/LogoAuth';
import useSnackbar from '../../../hooks/useSnackbar';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../../redux/actions/userAction';
import CardHeaderX from '../../../components/card/CardHeaderX';

const LoginView = () => {
  const history = useHistory();
const dispatch = useDispatch()
  const { register, errors, handleSubmit } = useForm();
  const { handleClose, setSnackbar, snackbar } = useSnackbar();
const [loading, setLoading] = React.useState(false)

  const onSubmit = (data, e) => {
    e.preventDefault();
    setLoading(true)
    if(data.email !== 'upax@email.com'){
      setSnackbar({
        openX: true,
        messageX: 'Email incorrect',
        typeX: 'warning',
      });
      setLoading(false)
    }else{
      setTimeout(() => {
        dispatch(setUserAction(data))
        setSnackbar({
          openX: true,
          messageX: 'Session started',
          typeX: 'success',
        });
        localStorage.setItem('token', true);
        localStorage.setItem('email', data.email);
        history.replace('/employees');
        setLoading(true)
      }, 1000);
    }
    
  };


  return (
    <Container>
      <SnackbarX data={snackbar} handleClose={handleClose} />
      <GridCenterX>
        <Grid item xs={12} sm={10} md={6} lg={5} xl={5}>
          <CardTrans>
            <AvatarCircle />
            <CardHeaderX
              titleX="Log in"
              subtitleX="Login with your personal information"
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <LogoAuth />
                <TextFieldX
                  pasteDisable={true}
                  copyDisable={true}
                  error={errors?.email?.message}
                  name="email"
                  typeField="email"
                  label="Email*"
                  componentIcon={MailOutlineOutlinedIcon}
                  validations={register({ ...emailRule })}
                />

                <TextFieldPasswordX
                  label="Password*"
                  name="password"
                  error={errors?.password?.message}
                  validations={register({ ...passwordRule })}
                />

                <ProgressX show={loading} />
                <ButtonSubmitX text="Log in" />
                <Divider />
              </CardContent>
            </form>
          </CardTrans>
        </Grid>
      </GridCenterX>
    </Container>
  );
};

export default LoginView;
