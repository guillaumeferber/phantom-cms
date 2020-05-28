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
        return window.localStorage.getItem(name) && JSON.parse(window.localStorage.getItem(name))[name];
    },
    delete: (name) => {
        window.localStorage.removeItem(name);
    },
    clear: () => {
        return;
    }
}
export const capitalize = value => value.charAt(0).toUpperCase() + value.substring(1, value.length - 1);

export const copyToClipboard = str => {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    if (document.execCommand('copy')) {
        document.body.removeChild(el);
        return true;
    }
    return null;
}

export const sentences = (value, config) => {
    var nWords = Math.round(Math.random() * (config.maxWords - config.minWords) + config.minWords);
    var output = [];
    for(var i = 0; i < value; i++) {
        var tmpOutput = [];
        for(var j = 0; j < nWords; j++) {
            var w = config.words[Math.floor(Math.random() * config.words.length)];
            tmpOutput.push(0 === j ? capitalize(w) : w);
        }
        output.push(tmpOutput.join(' ') + '.');
    }
    return output.join(' ');
}
export const paragraphs = (value, config) => {
    let output = [];
    for (let i = 0; i < value; i++) {
        var nSentences = Math.round(Math.random() * (config.maxWords - config.minWords) + config.minWords);
        output.push(sentences(nSentences, config));
    }
    return output.join('\n\n');
}
