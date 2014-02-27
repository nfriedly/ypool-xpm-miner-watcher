ypool.net XPM Miner watcher
=======================

A node.js script to watch ypool.net's PrimeCoin jhPrimeminer and restart it every time it crashes. (This typically only happens when ypool.net is having connectivity issues.)

Requires [Node.js](http://nodejs.org/) and [jhPrimeminer](http://azbowling.com/AeroCloud/).

For more information, see http://ypool.net/ and http://primecoin.org/

To use, edit watch-jhPrimeminer.js and change the `miner_dir` and `miner_exe` variables to point to your copy of jhPrimeminer. 
Then run the script with the command `node watch-jhPrimeminer.js`