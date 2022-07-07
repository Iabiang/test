const e = require("express");
const db = require("../config/database");

exports.findAll = async ({
  tableName,
  limit = 10,
  offset = 0,
  sortColumnName = "",
  sortOperator = "asc",
}) => {
  if (sortColumnName === "") {
    const sql = `SELECT * FROM ${tableName}  limit ${limit} offset ${offset}`;
    return await db.query(sql);
  } else {
    const sql = `SELECT * FROM ${tableName} order by ${sortColumnName} ${sortOperator} limit ${limit} offset ${offset}`;
    return await db.query(sql);
  }
};

exports.countRows = async ({ tableName, columnName = "", key = null }) => {
  if (key !== null) {
    const sql = `select count(*) FROM ${tableName} where ${columnName} = $1`;
    return await db.query(sql, [key]);
  } else {
    const sql = `select count(*) FROM ${tableName}`;
    return await db.query(sql);
  }
};

exports.findById = async ({
  tableName,
  columnName = "",
  id = null,
  limit = 10,
  offset = 0,
  sortColumnName = "",
  sortOperator = "asc",
}) => {
  if (!sortColumnName) {
    const sql = `SELECT * FROM ${tableName} WHERE ${columnName} = $1 limit ${limit} offset ${offset}`;
    return await db.query(sql, [id]);
  } else {
    const sql = `SELECT * FROM ${tableName} WHERE ${columnName} = $1 order by ${sortColumnName} ${sortOperator} limit ${limit} offset ${offset}`;
    return await db.query(sql, [id]);
  }
};

exports.create = async ({ tableName, keys, values }) => {
  const placeholder = keys.map((_, i) => `\$${i + 1}`).join(",");
  const sql = `INSERT INTO ${tableName} (${keys})  VALUES(${placeholder})`;
  return await db.query(sql, values);
};

exports.update = async ({
  tableName,
  keys,
  values,
  columnNames = [],
  id = [],
  operator = "and",
}) => {
  const placeholder = keys.map((item, i) => `${item}  =  \$${i + 1}`); //map placeholder = firstname = $1'

  const placeholderNumber = keys.length + 1;

  const conditions = columnNames
    .map((item, i) => `${item} = \$${i + placeholderNumber}`) //constrainsts individualid = $1 and
    .join(` ${operator} `);

  const sql = `update ${tableName}  SET ${placeholder} where ${conditions}`;
  const concatValue = values.concat(id); // ['values', 'id']

  return await db.query(sql, concatValue);
};

exports.delete = async ({
  tableName,
  columnNames = [],
  values = [],
  operator = "and",
}) => {
  const conditions = columnNames
    .map((item, i) => `${item} = \$${i + 1}`)
    .join(` ${operator} `);

  const sql = `DELETE FROM ${tableName} where ${conditions}`;
  //   console.log(sql, conditions);
  return await db.query(sql, values);
};

exports.findByValue = async ({
  tableName,
  limit = 10,
  offset = 0,
  sortColumnName = "",
  sortOperator = "asc",
  columnName = "",
  value = "",
}) => {
  if (!sortColumnName) {
    const sql = `SELECT * FROM ${tableName} where ${columnName} = $1 limit ${limit} offset ${offset}`;
    return await db.query(sql, [value]);
  } else {
    const sql = `SELECT * FROM ${tableName} where ${columnName} = $1 order by ${sortColumnName} ${sortOperator} limit ${limit} offset ${offset}`;
    return await db.query(sql, [value]);
  }
};

exports.findByValues = async ({
  tableName,
  limit = 10,
  offset = 0,
  sortColumnName = "",
  sortOperator = "asc",
  columnNames = [],
  values = [],
  operator = "and",
}) => {
  const placeholder = columnNames
    .map((item, i) => `${item} = \$${i + 1}`) // placeholder = individualid = 1a and
    .join(` ${operator} `);
  if (!sortColumnName) {
    const sql = `SELECT * FROM ${tableName} WHERE ${placeholder} limit ${limit} offset ${offset}`;
    return await db.query(sql, values);
  } else {
    const sql = `SELECT * FROM ${tableName} WHERE ${placeholder} order by ${sortColumnName} ${sortOperator} limit ${limit} offset ${offset}`;
    return await db.query(sql, values);
  }
};

exports.findByStrings = async ({
  tableName = "",
  limit = 10,
  offset = 0,
  sortColumnName = "",
  sortOperator = "asc",
  columnNames = [],
  values = [],
  operator = "",
}) => {
  const placeholder = columnNames
    .map((item, i) => `lower(${item}) like lower($${i + 1})`)
    .join(` ${operator} `);

  if (sortColumnName === "") {
    const sql = `SELECT * FROM ${tableName} where ${placeholder} limit ${limit} offset ${offset}`;
    return await db.query(sql, values);
  } else {
    const sql = `SELECT * FROM ${tableName} where ${placeholder} order by ${sortColumnName} ${sortOperator} limit ${limit} offset ${offset}`;
    return await db.query(sql, values);
  }
};
