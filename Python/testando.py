import time, sys

for i in range(0, 3):
    sys.stdout.write("\r{}".format(i))
    sys.stdout.flush()
    time.sleep(1)

print ("\nBye Bye")
time.sleep(2)