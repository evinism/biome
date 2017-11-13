import signal
import sys
from threading import Timer, Thread
from biomeapi import BiomeApi
from biomeenvironment import BiomeEnvironment

environment = BiomeEnvironment(50, 50)

### Spin up threads
# API thread
def listen():
  BiomeApi(environment)

apiThread = Thread(target=listen)
apiThread.daemon = True
apiThread.start()

### env update threads
tickrate = 1.0
def tick():
  environment.tick()
  tickThread = Timer(tickrate, tick)
  tickThread.daemon = True
  tickThread.start()

tick()

signal.pause()
