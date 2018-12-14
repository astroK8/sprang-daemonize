var Daemonize = /** @class */ (function () {
    function Daemonize(opt) {
        this.started = false;
        this.executeCount = 0;
        this.options = opt;
    }
    Daemonize.prototype.start = function (immediately) {
        var _this = this;
        if (immediately === void 0) { immediately = true; }
        if (!this.started) {
            if (immediately) {
                this.execute();
            }
            this.started = true;
            this.intervalTimer = setInterval(function () {
                _this.execute();
            }, this.options.delay);
        }
    };
    Daemonize.prototype.stop = function () {
        clearInterval(this.intervalTimer);
        this.started = false;
        this.executeCount = 0;
    };
    Daemonize.prototype.isRunning = function () {
        return this.started;
    };
    Daemonize.prototype.execute = function () {
        this.options.f();
        if (this.options.limitedExecutionNumber) {
            this.executeCount++;
            if (this.executeCount >= this.options.limitedExecutionNumber) {
                this.stop();
            }
        }
    };
    return Daemonize;
}());
export { Daemonize };
//# sourceMappingURL=daemonize.js.map