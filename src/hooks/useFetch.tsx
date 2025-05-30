import { useState } from "react";

const useFetch = (cb: any, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<{ message?: string }>({});

    interface FetchOptions {
        [key: string]: any;
    }

    interface FetchCallback {
        (options: FetchOptions, ...args: any[]): Promise<any>;
    }

    const fn = async (...args: any[]): Promise<void> => {
        setLoading(true);
        setError({});
        try {
            const response = await (cb as FetchCallback)(options, ...args);
            setData(response);
            setError({});
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fn };
};

export default useFetch;