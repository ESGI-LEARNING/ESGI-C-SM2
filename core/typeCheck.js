
function validateStructure(props, propTypes) {
    Object.keys(propTypes).forEach(key => {
        const validator = propTypes[key];
        if (!validator(props[key])) {
            console.error(`Validation failed for prop ${key}. Expected type ${validator.name}.`);
        }
    });
}

const validator = {
    string: value => typeof value === 'string',
    number: value => typeof value === 'number',
    boolean: value => typeof value === 'boolean',
    array: value => Array.isArray(value),
    object: value => value !== null && typeof value === 'object',
    function: value => typeof value === 'function',
    required: value => value !== null && value !== undefined,
};

export { validator, validateStructure };