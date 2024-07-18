export default function type_check(variable, conf) {
    const type = conf.type;
    const value = conf.value;
    const enumValues = conf.enum;
    const properties = conf.properties;

    function isEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }

        for (const key in obj1) {
            if (obj1[key] instanceof Object && obj2[key] instanceof Object) {
                if (!isEqual(obj1[key], obj2[key])) {
                    return false;
                }
            } else if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    }

    if (type) {
        if (type === 'object') {
            if (variable === null || Array.isArray(variable)) {
                return false;
            }
            if (typeof variable !== type) {
                return false;
            }

            if (properties) {
                let hasAllProperties = true;
                let hasValidProperties = true;

                for (const prop in properties) {
                    if (!Object.prototype.hasOwnProperty.call(variable, prop)) {
                        hasAllProperties = false;
                    } else {
                        if (!type_check(variable[prop], properties[prop])) {
                            hasValidProperties = false;
                        }
                    }
                }

                return hasAllProperties && hasValidProperties;
            }
        } else if (type === 'array') {
            if (!Array.isArray(variable)) {
                return false;
            }
        } else if (type === 'null') {
            if (variable !== null) {
                return false;
            }
        } else {
            if (typeof variable !== type) {
                return false;
            }
        }
    }

    if (value !== undefined) {
        if (typeof variable === 'object' && typeof value === 'object') {
            if (!isEqual(variable, value)) {
                return false;
            }
        } else if (variable !== value) {
            return false;
        }
    }

    if (enumValues !== undefined) {
        let isInEnum = false;

        for (const enumValue of enumValues) {
            if (typeof variable === 'object' && typeof enumValue === 'object') {
                if (isEqual(variable, enumValue)) {
                    isInEnum = true;
                    break;
                }
            } else if (variable === enumValue) {
                isInEnum = true;
                break;
            }
        }

        if (!isInEnum) {
            return false;
        }
    }

    return true;
}
