import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { fetchDataLogin } from '../redux/actions/LoginAction'
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import { withFormik } from 'formik'

const Login = (props) => {
    // let history = useHistory()
    // if (props.loginData.isAuthUser) {
    //     console.log("abc");
    //     history.push({ pathname: '/home' })
    // }

    
    const { values, handleChange, handleSubmit, errors, touched, isSubmitting } = props;
    const formik = useFormik({
        initialValues: {

            email: "",
            password: "",

        },
        //enableReinitialize: true,
        validationSchema: Yup.object({
            email: Yup.string().email().required('Email is required'),
            password: Yup.string().min(4, 'Password must be 4 characters or longer').required()
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          }

    });


    return (
        <>
            {/* <p>Login</p>
            <button onClick={() => {
                // dispatch action
                // dispatch({ type: 'increment-counter' })
                props.login("huy", 123);



            }}>Login</button> */}
            <div className="mt-10">

                <div className="text-center" >
                    {/* <img src={logo} width="120px" height="120px" /> */}




                    <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">

                        <form className="" onSubmit={formik.handleSubmit}>

                            <p>
                                <span className="col-8">
                                    <label htmlFor="userEmail" className="block">
                                        Username:
                                    </label>
                                </span>
                                <span className="col-8">
                                    <input
                                        className="col-8"
                                        type="email"
                                        style={{ width: "200px" }}

                                        name="email"

                                        placeholder="E.g: faruq123@gmail.com"
                                        id="email"
                                        value={formik.values.email || ''}
                                        onChange={formik.handleChange}
                                    />
                                </span>
                            </p>
                            <p className="col-16">
                                <span className="col-8">
                                    <label htmlFor="userPassword" className="block">
                                        Password:
                                    </label>
                                </span>
                                <span className="col-7">
                                    <input
                                        type="password"
                                        style={{ width: "200px" }}
                                        name="password"
                                        value={formik.values.password || ''}
                                        onChange={formik.handleChange}
                                        placeholder="Your Password"
                                        id="password"

                                    />
                                </span>
                            </p>
                            <p>


                            </p>

                            <button
                                type="submit"
                                style={{ backgroundColor: '#e6c32a', color: 'white' }}>
                                Log in
                            </button>
                        </form>


                    </div>
                </div>
            </div>

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
//export default FormikForm;

