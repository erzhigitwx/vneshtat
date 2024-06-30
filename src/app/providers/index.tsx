import {ReactNode} from "react";
import {ErrorBoundary} from "@/app/providers/errour-boundary";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "@/app/config/store";

const Providers = ({children}: { children: ReactNode }) => {
    return (
        <BrowserRouter>
            <ErrorBoundary fallback={<div>unhandled error</div>}>
                <Provider store={store}>
                    {children}
                </Provider>
            </ErrorBoundary>
        </BrowserRouter>
    )
};

export {Providers};