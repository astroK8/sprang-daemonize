

export interface DaemonizeOptions {
    f:Function,
    delay:number,
    limitedExecutionNumber?:number
}

export class Daemonize {

    private intervalTimer:any;
    private started:boolean=false;
    private executeCount:number=0;
    private options:DaemonizeOptions;

    constructor(opt:DaemonizeOptions) {
        this.options=opt;
    }

    public start(immediately:boolean=true):void {
        if(!this.started) {
            if(immediately) {
                this.execute()
            }
            this.started=true;
            this.intervalTimer = setInterval(()=>{
                this.execute();
            },this.options.delay)
        }
    }

    public stop():void {
        clearInterval(this.intervalTimer);
        this.started=false;
        this.executeCount=0;
    }

    public isRunning():boolean {
        return this.started;
    }

    private execute() {
        this.options.f();
        if(this.options.limitedExecutionNumber) {
            this.executeCount++;
            if(this.executeCount>=this.options.limitedExecutionNumber) {
                this.stop();
            }
        }
    }

}