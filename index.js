function StopWatch() {
    let duration = 0;
    let running = false;
    let startTime, endTime;
  
    this.start = function () {
      if (running) {
        console.log("Stopwatch is running");
        return;
      }
      running = true;
      startTime = Date.now();
    };
  
    this.stop = function () {
      if (!running) {
        console.log("Stopwatch is already stopped");
        return;
      }
      running = false;
      endTime = Date.now();
      duration = (endTime - startTime) / 1000;
    };
  
    this.restart = function () {
      duration = 0;
      running = false;
      startTime = null; //u can use undefined as well. but null is prefered when we want to reset values
      endTime = null;
    };
  
    Object.defineProperty(this, "duration", {
      get: function () {
        return duration;
      }
    });
  }
  
  // sw.duration;
  