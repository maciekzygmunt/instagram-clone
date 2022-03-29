import classes from './Login.module.css';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/login-slice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBo2xRSGIoNRkQCj9Av-EjZnnK94b34kq0',
      {
        method: 'POST',
        body: JSON.stringify({
          email: data.Email,
          password: data.Password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      dispatch(loginActions.login());
      dispatch(loginActions.setEmail(data.Email));
      navigate('/');
    }
  };

  return (
    <div className={classes.mainContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src="https://links.papareact.com/ocw" alt="instagram-logo" className={classes.image} />

        <div className={classes.inputsContainer}>
          <input
            className={classes.input}
            type="text"
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className={classes.input}
            type="password"
            placeholder="Password"
            {...register('Password')}
          />

          <button className={classes.button} type="submit">
            Sign Up
          </button>
        </div>
        <p className={classes.createAccountLink}>
          Already have an account?{' '}
          <Link className={classes.signupLink} to="/login">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
