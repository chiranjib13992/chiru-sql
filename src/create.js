function create(table, data){
    const keys = Object.keys(data).join(", ");
    const values = Object.values(data).map(ele => `'${ele}'`).join(", ");

    return `INSERT INTO ${table} (${keys}) VALUES (${values});`;
}

module.exports = create;