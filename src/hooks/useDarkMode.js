import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage('darkMode')
    return[storedValue, setValue];
}

export default useDarkMode;