function deleteRecord(table, where) {
    const condition = Object.entries(where).map(([k, v]) => `${k} = '${v}'`).join(" AND ");

    return `DELETE FROM ${table} WHERE ${condition};`;
}

module.exports = deleteRecord;