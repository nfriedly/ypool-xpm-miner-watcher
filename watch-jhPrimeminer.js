#!/usr/bin/env node

var miner_dir = __dirname + "/jhPrimeminer T17v12/";
var miner_exe = miner_dir + "jhPrimeminer-T17v12.exe";

var cp = require('child_process');
var _ = require('lodash');

/* 
  todo: 
   * figure out what Val/h, PPS, SPS, ACC, and NPS mean
   * play with:
      -s Maximum Sieve Size: 512000 - 10240000 (Default 1536000, Must be in 64000 increments) (8 to 160, default 24,  multiplied by 64000)
      -c Chunk Size: 64000 - 10240000 (Default 256000, Must be in 64000 increments) (1 to 160, default 4, multiplied by 64000)
      -se 0 - 13 (Default 9, Larger SieveSize = Smaller Sieve Extensions)
      -layers 10 - 12 (Default 10, once diff reaches 11, set to 11)
   * figure out what effect randomizing the m numbers has
 */

var primes = [31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107];
var m_numbers = [''].concat(_.range(2,17)).map(function(num) { return 'm' + num; });

var args = ['-port', '8080', '-u', 'nfriedly.XPM_1', '-p', 'x', /*'-c', 10240000 , '-s', 160*64000*/];

var crashCount = -1; // -1 so that the first start() call bumps this up to 0
setInterval(function() {
    console.log('crashes: ', crashCount);
}, 60*1000);

function start() {
  crashCount++;
  var margs = []; //_.flatten(_.zip(m_numbers, _.shuffle(primes).slice(0,16)));
  //console.log('starting with %j', margs);
  var miner = cp.spawn(miner_exe, args.concat(margs), {
    cwd: miner_dir,
    stdio: 'inherit'
  })
  miner.on('exit', start);
}

start();