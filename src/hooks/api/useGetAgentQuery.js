import React from 'react';
import {useQuery} from 'react-query'
import {agent} from "../../services/api";
import {useTranslation} from "react-i18next";
import {encode} from 'js-base64';
import Storage from "../../services/storage"
import {get, isEqual} from "lodash";
import {toast} from "react-toastify";
import {notification} from "antd"
import {useSettingsStore} from "../../store";



const useGetAgentQuery = ({
                              key = "get-all",
                              url = "/",
                              params = {},
                              showSuccessMsg = false,
                              hideErrorMsg = false,
                              enabled = true,
                          }) => {
    const [api, contextHolder] = notification.useNotification();
    const setClientInfo =  useSettingsStore(state => get(state, 'setClientInfo', () => {
    }))

    const {t} = useTranslation();
    const pathName = get(window, "location.pathname").slice(1, 5);
    const {isLoading, isError, data, error, isFetching} = useQuery([key], () => agent.get(url, params), {
        onSuccess: ({data}) => {
            setClientInfo(encode(JSON.stringify(data)))
        },
        onError: (data) => {
            if (!hideErrorMsg) {
               
            }
        },
        enabled,
    });
    return {
        isLoading,
        isError,
        data,
        error,
        isFetching
    }
};

export default useGetAgentQuery;
