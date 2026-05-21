import React from "react";

import {
    AuthTemplate,
} from "../../Components/Templates";

import {
    RegisterForm,
} from "../../Components/Organims";
import AuthService from "../../core/services/AuthServices/AuthService";

const RegisterPage = () => {

    const handleRegister = () => {
        console.log("Register");
        const dummyUser = {
            id: 0,
            nombre:  `John Doe` ,
            username: `John Doe`,
            email: `JohnDoe@example.com`,
            fechaNacimiento: `1990-01-01`,
            contrasena: `password123`,
        };
        AuthService.register(dummyUser);
    };

    return (
        <AuthTemplate>

            <RegisterForm
                onSubmit={handleRegister}
                disabledAction={false}
            />

        </AuthTemplate>
    );
};

export default RegisterPage;