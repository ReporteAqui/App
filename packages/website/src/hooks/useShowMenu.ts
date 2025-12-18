
import { useState } from 'react';

export default function useShowMenu() {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleShowMenu = () => {
        setShowMenu((prev) => (prev ? false : true));
    };

    return { showMenu, toggleShowMenu };
}
