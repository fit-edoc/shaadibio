/**
 * Proactive memory monitor that triggers a restart if limits are exceeded.
 */
class MemoryGuard {
    constructor(options = {}) {
        this.rssLimit = options.rssThresholdMb * 1024 * 1024 || 1024 * 1024 * 1024; // Default 1GB
        this.checkInterval = options.checkIntervalMs || 10000;

        this.start();
    }

    start() {
        this.timer = setInterval(() => {
            const mem = process.memoryUsage();
            const rssMb = Math.round(mem.rss / 1024 / 1024);
            const heapMb = Math.round(mem.heapUsed / 1024 / 1024);
            const externalMb = Math.round(mem.external / 1024 / 1024);

            console.log(`[MemoryGuard] RSS: ${rssMb}MB, Heap: ${heapMb}MB, External: ${externalMb}MB`);

            if (mem.rss > this.rssLimit) {
                console.error(`!!! CRITICAL: RSS (${rssMb}MB) exceeded limit (${Math.round(this.rssLimit / 1024 / 1024)}MB). Gracious shutdown...`);
                this.gracefulShutdown();
            }
        }, this.checkInterval).unref();
    }

    gracefulShutdown() {
        // Stop accepting new connections
        // In a real app, you'd close the server here
        console.warn('Process terminating due to memory threshold. Ensure a process manager (PM2/Nodemon) is configured to restart.');

        // Give some time for logs to flush
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

module.exports = MemoryGuard;
