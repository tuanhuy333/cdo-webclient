import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { fetchDataLogin } from '../redux/actions/LoginAction'
import { useHistory } from 'react-router-dom';
import InputField from "../components/InputField";

import "antd/dist/antd.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik, Formik, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
    SubmitButton,
    Input,
    Checkbox,
    ResetButton,
    FormikDebug,
    Form,
    FormItem,
} from "formik-antd"
import { message, Button, Row, Col } from "antd"

const Login = (props) => {
    let history = useHistory()
    if (props.loginData.isAuthUser) {

        history.push({ pathname: '/home' })
    }


    const handleSubmitLogin = (values, actions) => {

        message.info(JSON.stringify(values, null, 4))

        // dispatch({ type: 'increment-counter' })
        props.login(values.email, values.password);

        actions.setSubmitting(false)
        actions.resetForm()
    }
    return (
        <>


            <Formik
                initialValues={{

                    email: "",
                    password: "",
                    remember: false,
                }}
                validationSchema={Yup.object({

                    email: Yup.string().email('Invalid email address').required('Required'),
                    password: Yup.string()
                        .min(8, 'Must be 8 characters or more')
                        .required('Required')
                        .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa nhất một số."),
                })}
                onSubmit={handleSubmitLogin}

                render={({ errors, touched }) => (
                    <Form
                        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
                        labelCol={{ xs: 4 }}
                        wrapperCol={{ xs: 20 }}
                    >
                        <div style={{ flex: 1 }} />
                        <div style={{ background: "white", flex: 1, padding: 40 }}>
                            {/* Custom Field */}
                            <FastField label={'Email'} name="email" component={InputField} />
                            {/* {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null} */}
                            <ErrorMessage name="email" />
                            <FormItem name="password" label="Password">
                                <Input.Password name="password" placeholder="Password" />
                            </FormItem>
                            <FormItem
                                name="remember"
                                labelCol={{ xs: 4 }}
                                wrapperCol={{ offset: 4, xs: 20 }}
                            >
                                <Checkbox name="remember">Remember Me</Checkbox>

                            </FormItem>

                            <Row style={{ marginTop: 60 }}>
                                <Col offset={8}>
                                    <Button.Group>
                                        {/* <ResetButton>Reset</ResetButton> */}
                                        <SubmitButton>Login</SubmitButton>
                                    </Button.Group>
                                </Col>
                            </Row>
                        </div>
                        <pre style={{ flex: 1 }}>
                            <FormikDebug />
                        </pre>
                    </Form>
                )
                }
            />



        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(fetchDataLogin(email, password));
        }


    }
};
const mapStateToProps = (state) => {
    console.log("State", state)
    return {

        loginData: state.LoginReducer

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


