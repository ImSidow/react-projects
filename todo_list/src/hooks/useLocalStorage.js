export default function useLocalStorage(localStorageItemKey) {
    let storage = null;
    try {
        storage = JSON.parse(localStorage.getItem(localStorageItemKey));
    } catch (error) {
        storage = localStorage.getItem(localStorageItemKey);
    }

    const setStorage = (data) => {
        if (typeof data === "object") localStorage.setItem(localStorageItemKey, JSON.stringify(data));
        else localStorage.setItem(localStorageItemKey, data);
    };

    const clear = () => {
        localStorage.removeItem(localStorageItemKey);
    };

    return [storage, setStorage, clear];
}
