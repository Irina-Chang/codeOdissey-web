import { Container, TextField, Button } from '@mui/material';
import PageHeader from "@components/PageHeader";
import PageFooter from "@components/PageFooter";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { schema } from './types';
import { loginAction } from './actions';


function Login2() {
  const { t } = useTranslation();
  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const resp = await loginAction(getValues())
      if(!resp.success) throw resp.error
      //navigate("/courses");

    } catch(err: unknown) {
      console.error("something went wrong: ",err)
    }
  }

  return (
    <Container maxWidth="sm">
      <PageHeader title={t('Login')} text={t('Log in or Sign in')} />
      <form onSubmit={handleSubmit(handleLogin)}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email")} placeholder="email" type="email" required
          />
          <p>{errors.email?.message}</p>

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <Button type="submit" variant="contained">Log In</Button>
      </form>

      <PageFooter text={t('login')} />
    </Container>
  );
}

export default Login2;