export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
}
export const generateRandomId = () => {
    return Math.floor(Math.random() * (Math.floor(9E8) - Math.ceil(1E3))) + Math.ceil(1E3);
}
