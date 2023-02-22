import os

list_ = os.listdir()

c = 0

for i in list_:
    print(f"Images[{c}] = '../../wp/{i}'")
    c += 1
