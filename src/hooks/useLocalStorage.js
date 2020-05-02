const useLocalStorage = () => {
  const setLocalStorage = (item) => localStorage.setItem('name', item);

  const getLocalStorage = () => localStorage.getItem('name');

  return { setLocalStorage, getLocalStorage };
};

export default useLocalStorage;
