export function romanToInteger(str) {
    let result = 0;

    const romanIntMap = {
        I: 1,
        II: 2,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < str.length; i++) {
        const current = romanIntMap[str[i]];
        const next = romanIntMap[str[i + 1]];

        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}
