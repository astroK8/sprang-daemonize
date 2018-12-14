export interface DaemonizeOptions {
    f: Function;
    delay: number;
    limitedExecutionNumber?: number;
}
export declare class Daemonize {
    private intervalTimer;
    private started;
    private executeCount;
    private options;
    constructor(opt: DaemonizeOptions);
    start(immediately?: boolean): void;
    stop(): void;
    isRunning(): boolean;
    private execute;
}
