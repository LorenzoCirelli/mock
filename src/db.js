import mysql from "mysql";
export function dbRes(route) {
  return new Promise((res)=>{
    //data for connection
  const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "js",
  });

  con.connect(function (err) {
    if (err) throw err;
    const query = `SELECT * FROM test WHERE route = '${route}' ORDER BY id DESC LIMIT 0,1`
    con.query(query, function (err, result, fields) {
      if (err) throw err;
        res(result)
    });
  });
  });
  

}
