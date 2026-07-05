function remove(table, where) {
    const whereKeys = Object.keys(where);

    const whereClause = whereKeys.map(key => `${key} = ?`).join(" AND ");

    return {
        sql: `DELETE FROM ${table} WHERE ${whereClause}`,
        values: Object.values(where)
    };
}

module.exports = remove;