import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

export const usePostRequest = (endpoint) => {
  const [errorResponse, setErrorResponse] = useState();
  const [success, setSuccess] = useState();

  const createRequest = async (formData) => {
    try {
      const res = await axios.post(`${endpoint}`, formData);
      setSuccess(res.data);
    } catch (error) {
      setErrorResponse({
        errorStatus: error.response.data.statusCode,
        errorResponse: error.response.data.message,
      });
    }
  };

  const { mutateAsync: createPost, isLoading } = useMutation(createRequest);

  return { createPost, isLoading, errorResponse, success };
};
