function update(table, data, where) {
    const set = Object.entries(data).map(([k, v]) => `${k} = '${v}'`).join(", ");
    const condition = Object.entries(where).map(([k, v])=> `${k} = '${v}'`).join(", ");

    return `UPDATE ${table} SET ${set} WHERE ${condition};`;
}

module.exports = update;