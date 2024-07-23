export default function isClassComponent(component) {
    if (typeof component !== 'function') {
        return false;
    }
    try {
        component();
        return false;
    } catch (error) {
        const classRegex = /^class\s+\w+/;
        if (classRegex.test(component.toString())) {
            return true;
        }
        return false;
    }
}
