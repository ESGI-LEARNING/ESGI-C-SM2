function validateStructure(props, propTypes) {
    Object.keys(propTypes).forEach(key => {
        const validator = propTypes[key];

        if (!validator(props[key])) {
            console.error(`Validation a eu une erreur pour la prop ${key}. Sur le type ${validator.name}.`);
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

const propsTypes = {
    styles: validator.object,
    href: validator.string,
    class: validator.string,
    value: validator.string || validator.number,
    src: validator.string,
    alt: validator.string,
    loading: validator.string,
    for: validator.string,
    id: validator.string,
    name: validator.string,
    required: validator.boolean,
    type: validator.string,
}

export { validator, validateStructure, propsTypes };