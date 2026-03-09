/**
 * Manages WebSocket connections to prevent memory exhaustion and "ghost" sockets.
 */
class WebSocketManager {
    constructor(wss, options = {}) {
        this.wss = wss;
        this.maxConnections = options.maxConnections || 1000;
        this.pingInterval = options.pingInterval || 30000;
        this.connections = new Set();

        this._setupMonitoring();
    }

    _setupMonitoring() {
        this.wss.on('connection', (ws, req) => {
            if (this.connections.size >= this.maxConnections) {
                console.warn('Max connections reached. Rejecting new client.');
                ws.terminate();
                return;
            }

            ws.isAlive = true;
            this.connections.add(ws);

            ws.on('pong', () => { ws.isAlive = true; });

            ws.on('close', () => {
                this.connections.delete(ws);
            });

            ws.on('error', (err) => {
                console.error('WS Error:', err);
                ws.terminate();
            });
        });

        // Heartbeat to prune dead connections
        const interval = setInterval(() => {
            this.wss.clients.forEach((ws) => {
                if (ws.isAlive === false) {
                    this.connections.delete(ws);
                    return ws.terminate();
                }
                ws.isAlive = false;
                ws.ping();
            });
        }, this.pingInterval);

        this.wss.on('close', () => {
            clearInterval(interval);
        });
    }

    getStats() {
        return {
            activeConnections: this.connections.size,
            maxLimit: this.maxConnections
        };
    }
}

module.exports = WebSocketManager;
