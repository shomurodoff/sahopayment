import React from 'react';
import useAuth from "../../hooks/auth/useAuth";
import {isNil,get} from "lodash";

const HasProfile = ({children,...rest}) => {
    const {isAuthenticated,user} = useAuth({});
    return isAuthenticated && !isNil(get(user,'employee.emp_id')) ? children : null
};

export default HasProfile;