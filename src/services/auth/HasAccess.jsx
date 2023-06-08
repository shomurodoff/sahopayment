import React, {useEffect, useState} from 'react';
import {includes, isEmpty, uniq, get} from "lodash";
import {OverlayLoader} from "../../components/loader";
import {useStore} from "../../store";


export const hasAccess = (roleList = [], access = [],deny = []) => {
    let hasRole = false;
    access.forEach((role) => {
        if (includes(roleList, `${role}`)) {
            hasRole = true
        }
    })
    deny.forEach((role) => {
        if (includes(roleList, `${role}`)) {
            hasRole = false
        }
    })
    return hasRole;
}
export const hasPermission = (permissionList = [], can = [], cant = [], exceptCan = []) => {
    let hasPermission = false;
    can.forEach((permission) => {
        if (includes(permissionList, `${permission}`)) {
            hasPermission = true
        }
    })
    cant.forEach((permission) => {
        if (includes(permissionList, `${permission}`)) {
            hasPermission = false
        }
    })
    return hasPermission;
}
const HasAccess = ({
                       access = [],
                       deny = [],
                       can = [],
                       cant = [],
                       exceptCant = [],
                       children,
                       DeniedComponent = () => <></>,
                       ...rest
                   }) => {
    const [roles, setRoles] = useState([]);
    const [permissions, setPermissions] = useState([]);
    const user = useStore(state => get(state, 'user', {}))

    useEffect(() => {
        if (!isEmpty(user)) {
            setRoles(uniq(get(user, 'access.role', [])));
            setPermissions(uniq(get(user, 'access.permissions', [])));
        }
    }, [user])

    if (isEmpty(roles) || isEmpty(permissions)) {
        return <OverlayLoader/>
    }

    if(!isEmpty(can)){
        return  hasPermission(permissions,can,cant) ? children : <DeniedComponent />
    }

    return (
        <>
            {hasAccess(roles, access, deny) ? children : <DeniedComponent/>}
        </>
    );
};

export default HasAccess;