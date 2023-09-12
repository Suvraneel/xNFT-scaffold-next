'use client'
import ErrorBoundary from '@components/ErrorBoundary';
import ContextProvider from "@contexts/ContextProvider";
import { ToastContainer } from 'react-toastify';
import { FC, ReactNode } from "react";

export const AllProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <ErrorBoundary>
                <ContextProvider>
                        { children }
                </ContextProvider>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='dark'
                />
        </ErrorBoundary>
    );
};

export default AllProvider;
