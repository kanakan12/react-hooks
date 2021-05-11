import { useEffect, useRef } from "react";

export const useFadeIn = (duration, delay) => {
    if(typeof duration !== "number") {
        duration = 1;
    }
    if(typeof delay !== "number") {
        delay = 0;
    }
    const element = useRef();
    useEffect(() => {
        if(element.current) {
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, [duration, delay])
    return {ref: element, style: {opacity: 0}};
}