import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        const current = element.current;
        if(current) {
            current.addEventListener("click", onClick);
        }
        return () => {
            if(current) {
                current.removeEventListener("click", onClick)
            }
        };
    });
    return element;
}