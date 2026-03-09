/**
 * Utility to track active handles and requests.
 * Helps identify file descriptor leaks and hung sockets.
 */
function logActiveHandles() {
    const handles = process._getActiveHandles();
    const requests = process._getActiveRequests();

    console.group('--- EVENT LOOP SNAPSHOT ---');
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Active Handles: ${handles.length}`);
    console.log(`Active Requests: ${requests.length}`);

    const stats = handles.reduce((acc, h) => {
        const type = h.constructor.name;
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    console.log('Handle Types:', stats);
    console.groupEnd();
}

/**
 * Starts periodic handle logging
 * @param {number} intervalMs 
 */
function startTracking(intervalMs = 60000) {
    return setInterval(logActiveHandles, intervalMs).unref();
}

module.exports = { logActiveHandles, startTracking };
