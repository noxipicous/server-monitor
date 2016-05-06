'use strict';

console.log('\'Allo \'Allo! Popup');

angular.module('app', ['ui.bootstrap'])
  .controller('MonitorController', MonitorController);
  
  
function MonitorController() {
  var monitor = this;
  var serverList = [
    {name:'Users', status: 0},
    {name:'Notifications', status: 1},
    {name:'Chat', status: 2},
  ];
 
  monitor.servers = serverList; 
}
