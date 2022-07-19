import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const useGetRequest = (endpoint, nameOfRequest) => {
  // debugger
  const [errorResponse, setErrorResponse] = useState();
  const [successResponse, setSuccessResponse] = useState();
  const fetchResult = async () => {
    try {
      const res = await axios.get(`${endpoint}`);
      console.log(res);
      setSuccessResponse(res.data);
    } catch (error) {
      setErrorResponse({
        errorStatus: error.response.data.statusCode,
        errorResponse: error.response.data.message,
      });
    }
  };

  const { isLoading } = useQuery(`${nameOfRequest}`, () => fetchResult());
  return { successResponse, isLoading, errorResponse };
};
