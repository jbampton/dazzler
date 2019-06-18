export const timestampProp = (prop_name, value) => {
    const payload = {};
    payload[prop_name] = value;
    payload[`${prop_name}_timestamp`] = new Date();
    return payload;
};

export function loadScript(uri, timeout = 3000) {
    return new Promise((resolve, reject) => {
        let timeoutId;
        const onload = () => {
            clearTimeout(timeoutId);
            resolve(uri);
        };

        const attributes = {
            src: uri,
            async: true,
        };
        const element = document.createElement('script');
        Object.keys(attributes).forEach(k =>
            element.setAttribute(k, attributes[k])
        );
        element.onload = onload;

        timeoutId = setTimeout(() => {
            element.src = '';
            reject({error: `${uri} did not load after ${timeout}ms`});
        }, timeout);

        document.querySelector('body').appendChild(element);
    });
}

export function loadCss(uri, timeout = 3000) {
    return new Promise((resolve, reject) => {
        let timeoutId;
        const onload = () => {
            clearTimeout(timeoutId);
            resolve(uri);
        };
        document.querySelector('head');
        const attributes = {
            rel: 'stylesheet',
            type: 'text/css',
            href: uri,
            media: 'all',
        };
        const element = document.createElement('link');
        Object.keys(attributes).forEach(k =>
            element.setAttribute(k, attributes[k])
        );
        element.onload = onload;

        timeoutId = setTimeout(() => {
            style.href = '';
            reject({error: `${uri} did not load after ${timeout}ms`});
        }, timeout);

        document.querySelector('head').appendChild(element);
    });
}
