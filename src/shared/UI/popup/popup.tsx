import { forwardRef } from 'react'
import clsx from "clsx";
import {PopupProps} from "./popup.props";

const Popup = forwardRef(
    ({ children, withShadow, isCentered, extraClass, ...rest }: PopupProps, ref: any) => {
        return isCentered ? (
            <div
                ref={ref}
                className={clsx(
                    "fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center",
                    withShadow && "bg-black bg-opacity-20",
                )}
                {...rest}
            >
                <div onClick={(e) => e.stopPropagation()} className={extraClass}>
                    {children}
                </div>
            </div>
        ) : (
            <div ref={ref} className={clsx("absolute z-40", withShadow && "bg-black opacity-20", extraClass)} {...rest}>
                {children}
            </div>
        )
    },
)

export { Popup }