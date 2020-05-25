export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
}
export const generateRandomId = () => {
    return Math.floor(Math.random() * (Math.floor(9E8) - Math.ceil(1E3))) + Math.ceil(1E3);
}

export const generateTimestamp = () => {
    const d = new Date();
    return Math.floor(d.getTime() / 1000);
}

export const stripHTMLTags = value => value.replace(/(<([^>]+)>)/ig,"");
export const getDateFromTimestamp = (value) => {
    return new Date(value * 1000).toLocaleDateString('en-CA', {
        day : 'numeric',
        month : 'numeric',
        year : 'numeric'
    });
}

// Storage

export const storage = {
    load: (name, data) => {
        window.localStorage.setItem(name, JSON.stringify(data));
    },
    unload: (name) => {
        return JSON.parse(window.localStorage.getItem(name))[name];
    },
    delete: (name) => {
        window.localStorage.removeItem(name);
    },
    clear: () => {
        return;
    }
}
