module.exports = {
    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        description: {
            type: 'string'
        },
        data: {
            type: 'json'
        }
    },
};
