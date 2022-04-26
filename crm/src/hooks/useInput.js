import { useState } from "react";

export function useInput(defaultValue = null) {
    // заменил setValue на setvalue
    const [value, setvalue] = useState(defaultValue);

    function onChange(event) {
        setvalue(event.target.value);
    }

    return { value, onChange, setvalue };
}