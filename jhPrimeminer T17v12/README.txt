Thank you for downloading.


Please edit the miner.bat included in this zip file with your username.worker and password, then simply double click the miner.bat to start mining.

If you find this miner has helped you, please donate to continue development on making XPM miners better and support for the future of XPM.


Command Line Options:

-port port for pool miner (Default 10034)
-u Username.Worker
-p password
-t 1 to 128 (Default: All threads on machine)
-s 512000 - 10240000 (Default 1536000, Must be in 64000 increments)
-c 64000 - 10240000 (Default 256000, Must be in 64000 increments)
-se 0 - 13 (Default 9, Larger SieveSize = Smaller Sieve Extensions)
-layers 10 - 12 (Default 10, once diff reaches 11, set to 11)
-m 31-107 (Must be Prime number, recommended between 31 and 107)
-m2 through -m16 (Same as -m, more primorials)


For AMD Cpu users, test out -c 128000 and -c 64000, you might find better results.


Change Log: T17v5
Removed -split, because -split 0 was causing crashes on large threaded systems.

Change Log: T17v6
This release crashed on most systems, and was removed. (watchdog error)

Change Log: T17v7
Re-added watchdog thread, and possibly fixed the reconnect crash bug

Change Log: T17v8
Keep Alive Ping! Helps reduce your workers from falling off the website

Change Log: T17v10
New Fix put in for Server Disconnect which causes crashing

Change Log: T17v12
Auto Primorials! Remove all -m's to make primorials automatic.
Another Crash fix + possible speed up (0.25%) on some systems
Add -dWatch 1 to end of Command line if you experience Restarting Threads issue...


Donation Addresses:

XPM: AFv6FpGBqzGUW8puYzitUwZKjSHKczmteY
BTC: 1Ca9qP6tkAEo6EpgtXvuANr936c9FbgBrH


Thank you,
AeroCloud