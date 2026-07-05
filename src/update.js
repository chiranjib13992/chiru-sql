function update(table, data, where) {
    const setKeys = Object.keys(data);
    const whereKeys = Object.keys(where);

    const setClause = setKeys.map(key => `${key} = ?`).join(", ");
    const whereClause = whereKeys.map(key => `${key} = ?`).join(" AND ");

    return {
        sql: `UPDATE ${table} SET ${setClause} WHERE ${whereClause}`,
        values: [
            ...Object.values(data),
            ...Object.values(where)
        ]
    };
}

module.exports = update;

module.exports = update;