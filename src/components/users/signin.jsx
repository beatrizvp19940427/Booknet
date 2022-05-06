import React from 'react';
import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {signinUser} from '../../services/usersServices';

function Signin() {
    const [useremail, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullName] = useState();
    const [gender, setGender] = useState();

    return (
        <div className="flex-1 justify-center items-center">
            <h2 className="font-sans text-2xl font-bold text-gray-900 pt-12 text-center">Sign in</h2>

            <Formik
                initialValues={{ fname: '', lname: '', gender: '', email: '', password: '', confpassword: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    else if (values.password !== values.confpassword) {
                        errors.password = 'Passwords not matched';
                    }
                    else if(!values.lname){
                        errors.lname = 'Required';
                    }
                    else if(!values.fname){
                        errors.fname = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setEmail(values.email);
                    setPassword(values.password);
                    setFullName(values.fname+" "+values.lname);
                    setGender(values.gender);

                    var user={
                        fullname,
                        password,
                        useremail,
                        gender
                    }
                    signinUser(user).then(result => { console.log(result); })
                    .catch(error => { console.error(error); return Promise.reject(error); }); 
                    //register(username, password);
                    //alert("Your registration was successful");
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col px-12 py-3">
                        <div className="flex flex-col py-2">
                        <label>First Name</label>
                        <Field className="rounded border-2 border-gray-400 w-full h-10" type="text" name="fname" />
                        <ErrorMessage className="font-sans text-1xl font-bold text-gray-600" name="fname" component="span" />
                        </div>
                        <div className="flex flex-col py-2">
                        <label>Last Name</label>
                        <Field className="rounded border-2 border-gray-400 w-full h-10" type="text" name="lname" />
                        <ErrorMessage className="font-sans text-1xl font-bold text-gray-600" name="lname" component="span" />
                        </div>
                        <div className="flex flex-col py-2">
                        <label>Email</label>
                        <Field className="rounded border-2 border-gray-400 w-full h-10" type="email" name="email" />
                        <ErrorMessage className="font-sans text-1xl font-bold text-gray-600" name="email" component="span" />
                        </div>
                        <div className="flex flex-col py-2">
                        <label>Gender</label>
                        <Field className="rounded border-2 border-gray-400 w-full h-10" as="select" name="gender">
                                <option value="male">Male</option>
                                <option value="femle">Femle</option>
                                <option value="ns">N.S.</option>
                            </Field>
                        </div>
                        <div className="flex flex-col py-2">
                        <label>Password</label>
                        <Field className="rounded border-2 border-gray-400 w-full h-10" type="password" name="password" />
                        <ErrorMessage className="font-sans text-1xl font-bold text-gray-600" name="password" component="span" /> 
                        </div>
                        <div className="flex flex-col py-2">
                        <label>Confirm Password</label>
                        <Field className="rounded border-2 border-gray-400 w-full h-10" type="password" name="confpassword" />
                        <ErrorMessage className="font-sans text-1xl font-bold text-gray-600" name="confpassword" component="span" />
                        </div>
                        
                        <button className="rounded p-3 bg-green-300" type="submit" disabled={isSubmitting}>
                            Register
         </button>
                    </Form>
                )}
            </Formik>


        </div>
    );
}

export default Signin;