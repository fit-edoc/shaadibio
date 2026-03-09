const { pipeline } = require('stream');
const util = require('util');
const streamPipeline = util.promisify(pipeline);

/**
 * Safely pipelines streams with automatic cleanup.
 * Prevents leaks in zlib and file streams by ensuring destroy() is called.
 */
async function safePipeline(source, ...transforms) {
    try {
        await streamPipeline(source, ...transforms);
    } catch (err) {
        console.error('Pipeline failed:', err);
        // Explicitly destroy all streams to release native memory (important for zlib)
        source.destroy();
        transforms.forEach(t => t.destroy());
        throw err;
    }
}

/**
 * Example usage:
 * const fs = require('fs');
 * const zlib = require('zlib');
 * await safePipeline(
 *   fs.createReadStream('input.txt'),
 *   zlib.createGzip(),
 *   fs.createWriteStream('output.txt.gz')
 * );
 */

module.exports = { safePipeline };
