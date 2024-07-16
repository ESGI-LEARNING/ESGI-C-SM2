export default function isClassComponent(component) {
    if (typeof component !== 'function') {
        return false;
    }
    try {
        component();
        return false;
    } catch (error) {
        if (/^[C|c]lass constructor/.test(error.message)) {
            return true;
        }
        return false;
    }
}