import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseRequestProps<T> {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  onSuccess?: (data: T) => void;
  onError?: (error: any) => void;
}

export const useRequest = <T = any>({ url, method, onSuccess, onError }: UseRequestProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const doRequest = useCallback(async (body: any = {}, config: AxiosRequestConfig = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<T> = await axios[method](url, body, config);
      setData(response.data);

      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (err) {
      setError(err);

      if (onError) {
        onError(err);
      }
    } finally {
      setLoading(false);
    }
  }, [url, method, onSuccess, onError]);

  return { doRequest, data, loading, error };
};
