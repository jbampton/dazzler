import {last, slice, toPairs} from 'ramda';

export function camelToSnakeCase(s) {
    return s
        .split('')
        .map((c, i) =>
            c.charCodeAt(0) > 96
                ? c
                : i > 0
                ? `_${c.toLowerCase()}`
                : c.toLowerCase()
        )
        .reduce((p, n) => p + n);
}

export function snakeToCamelCase(s) {
    return s
        .split('')
        .reduce(
            (a, e) =>
                last(a) === '_'
                    ? slice(0, a.length - 1, a) + e.toUpperCase()
                    : a + e,
            ''
        );
}

export function camelToSpinal(s) {
    return s
        .split('')
        .map((c, i) =>
            c.charCodeAt(0) > 96
                ? c
                : i > 0
                ? `-${c.toLowerCase()}`
                : c.toLowerCase()
        )
        .reduce((p, n) => p + n);
}

export function transformKeys(obj, transform) {
    return toPairs(obj).reduce((a, [k, v]) => {
        a[transform(k)] = v;
        return a;
    }, {});
}
