import axios from 'axios';
import { useState } from 'react';

export default function useRequest(options) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const { url, method = 'get', body = {}, onSetError } = options;

    const makeRequest = async (p0: { body: { email?: string; password?: string; confirmPassword?: string; }; }) => {
        setLoading(true);
        setErrors(null);
        try {
            const response = await axios({
                method: method,
                url: url,
                data: body
            });
            setData(response.data);
            setLoading(false);
            return response.data;  
        } catch (err) {
            setLoading(false);
            if (err.response && err.response.data && err.response.data.errors) {
                const extractedErrors = err.response.data.errors;
                setErrors(extractedErrors);
                if (onSetError) {
                    extractedErrors.forEach(error => {
                        if (error.field && error.message) {
                            onSetError(error.field, { type: "manual", message: error.message });
                        }
                    });
                }
            }
        }
    };

    return { makeRequest, data, loading, errors };
}
