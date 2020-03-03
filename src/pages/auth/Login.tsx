import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { fetchLoginAsync } from '../../actions/auth.actions';
import { RootState } from 'Types';

export interface LoginProps {
    email: string;
    password: string;
}

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const Login: React.FC<Props> = ({ loginDispatch }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data: LoginProps) => {
        console.log(data);
        console.log(loginDispatch);

        loginDispatch(data);
    };

    return (
        <div>
            <h3>Login</h3>

            <form onSubmit={handleSubmit(onSubmit as any)}>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <span>This field is required</span>}

                <input
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    ref={register({ required: true })}
                />
                {errors.password && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    // authState: state.authReducer,
    // settingState: state.settingReducer,
});

const dispatchProps = {
    loginDispatch: fetchLoginAsync.request,
};

export default connect(mapStateToProps, dispatchProps)(Login);
