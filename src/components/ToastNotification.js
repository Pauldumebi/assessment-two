import { createStandaloneToast } from "@chakra-ui/react";

export const SuccessToast = (data, position) => {
  const toast = createStandaloneToast();

  Array.isArray(data)
    ? data.map((item) => {
        return toast({
          position: position ?? "bottom-right",
          title: "Success.",
          description: item,
          status: "success",
          duration: 6000,
          isClosable: true,
        });
      })
    : toast({
        position: position ?? "bottom-right",
        title: "Success.",
        description: data,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
};

export const ErrorToast = (data, position) => {
  const toast = createStandaloneToast();

  Array.isArray(data)
    ? data.map((item) => {
        return toast({
          position: position ?? "bottom-right",
          title: "Error.",
          description: item,
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      })
    : toast({
        position: position ?? "bottom-right",
        title: "Error.",
        description: data,
        status: "error",
        duration: 6000,
        isClosable: true,
      });
};