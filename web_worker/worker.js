// A FEW USE CASES FOR WEB WORKERS
// * long polling
// * pre-fetching and caching content
// * performing expensive tasks and long-running loops
// * spell-checker that runs continuously in the background

importScripts('external1.js','external2.js');

self.addEventListener('message',function(e){

  self.postMessage({
    'type': 'info',
    'answer': 'Doing pretty good!',
    'answerer':'Worker',
    'externalMessage1': messageFromExternalFile1,
    'externalMessage2': messageFromExternalFile2
  });


  setInterval(function(){
    var d = new Date();
    var timeMessage = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    self.postMessage({
      'type': 'timer',
      'timeMessage': timeMessage
    });
  }, 1000);

},false);
