# sprang-daemonize
Helper to mimic daemon behaviour.

```typescript
import {Daemonize,DaemonizeOptions} from 'sprang-daemonize';

let myFunction = ()=>{
    console.log('execution');
}

let options = {
    f:myFunction,
    delay:5000, // 5 seconds between two execution
    limitedExecutionNumber:5 // [Optional] Max number of consecutive executions, infinite by default 
}

let myDaemon = new Daemonize(false); // If true starts immediately (false by default)

myDaemon.start();
//execution
//execution
myDaemon.isRunning(); // true
myDaemon.stop();
myDaemon.isRunning(); // false
myDaemon.start();
//execution
//execution
//execution
//execution
//execution
myDaemon.isRunning(); // false
```

