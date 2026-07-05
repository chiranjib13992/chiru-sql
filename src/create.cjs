function create(table, data) {
    const keys = Object.keys(data);
    const placeholders = keys.map(() => "?").join(", ");

    return {
        sql: `INSERT INTO ${table} (${keys.join(", ")}) VALUES (${placeholders})`,
        values: Object.values(data)
    };
}

module.exports = create;