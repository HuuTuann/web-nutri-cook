import { notification } from "antd";
// import { NotificationInstance } from "antd/es/notification/interface";
import { createContext, useContext } from "react";

type ToastifyContextType = {
  toastify: {
    success: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
    warning: (message: string) => void;
  };
};

const ToastifyContext = createContext<ToastifyContextType>({
  toastify: {
    success: () => {},
    error: () => {},
    info: () => {},
    warning: () => {},
  },
});

export const ToastifyProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [api, contextHolder] = notification.useNotification();

  const toastify = {
    success: (message: string) => api.success({ message, showProgress: true }),
    error: (message: string) => api.error({ message, showProgress: true }),
    info: (message: string) => api.info({ message, showProgress: true }),
    warning: (message: string) => api.warning({ message, showProgress: true }),
  };

  return (
    <ToastifyContext.Provider
      value={{
        toastify,
      }}
    >
      {children}
      {contextHolder}
    </ToastifyContext.Provider>
  );
};

export const useToastify = () => useContext(ToastifyContext);
