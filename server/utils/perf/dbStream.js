const QueryStream = require('pg-query-stream');
const { Pool } = require('pg');

/**
 * Example of streaming large datasets from PostgreSQL.
 * Prevents loading millions of rows into Node.js heap.
 */
async function streamLargeQuery(sql, params, rowHandler) {
    const pool = new Pool(); // Usually initialized once in config
    const client = await pool.connect();

    try {
        const query = new QueryStream(sql, params);
        const stream = client.query(query);

        for await (const row of stream) {
            // Process each row one by one
            await rowHandler(row);
        }

    } catch (err) {
        console.error('DB Stream Error:', err);
        throw err;
    } finally {
        client.release();
    }
}

/**
 * Example usage:
 * await streamLargeQuery('SELECT * FROM large_table', [], async (row) => {
 *    await processRow(row);
 * });
 */

module.exports = { streamLargeQuery };
