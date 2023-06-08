import React from 'react';
import {get} from "lodash";
import {useSettingsStore, useStore} from "../../store";

const useAuth = ({...rest}) => {
    const isAuthenticated = useStore(state => get(state, 'isAuthenticated', false))
    const user = useStore(state => get(state, 'user', null))
    const token = useSettingsStore(state => get(state, 'token', null))
    return {
        user,
        isAuthenticated,
        token
    }
};

export default useAuth;