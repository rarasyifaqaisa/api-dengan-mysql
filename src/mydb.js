import mysql from 'mysql2'

const host = '192.168.87.197'
const port = 13306
const database = 'new_bioskop'
const user = 'user_bioskop'
const password = 'IniRahasia'

const pool = mysql.createPool({
  host, port, database, user, password
})
const promisePool = pool.promise()

export default promisePool