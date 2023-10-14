import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [showToast, setShowToast] = useState(true);

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {children}
    </ToastContext.Provider>
  );
}
