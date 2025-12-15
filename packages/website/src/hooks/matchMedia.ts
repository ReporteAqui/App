import { useEffect, useState } from 'react';

export default function userMedia() {
    const [isDesktop, setIsDesktop] = useState<boolean>(function () {
        return window.matchMedia("(min-width: 1024px)").matches;
    });

    useEffect(function() {
        const media = window.matchMedia("(min-width: 1024px)");

        const listener = () => setIsDesktop(media.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, []);


    const toggleIsDesktop = () => {
        setIsDesktop((prev) => (prev === true ? false : true));
    };

    return { isDesktop, toggleIsDesktop };
}
