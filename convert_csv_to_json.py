import csv
import json
from collections import deque
from itertools import islice


def skip_last_n(iterator, n):
    it = iter(iterator)
    prev = deque(islice(it, n), n)
    for item in it:
        yield prev.popleft()
        prev.append(item)


cols = []
json_data = []

with open('bangalore_schools.csv', 'r', encoding='utf-8') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter="|")
    cols = list(csv_reader)[0]
    for i in range(len(cols)):
        cols[i] = cols[i].strip()

with open('bangalore_schools.csv', 'r', encoding='utf-8') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter="|")
    # This will skip two rows
    next(csv_reader)
    next(csv_reader)
    for row in skip_last_n(csv_reader, 2):
        values = row
        data = {}
        for i in range(len(values)):
            values[i] = values[i].strip()
            if i == len(values)-1:
                lst = values[i].split('(')[1].replace(')', '').split()
                str = ",".join(lst)
                values[i] = str
            data[cols[i]] = values[i]

        json_data.append(data)

with open('bangalore_schools.json', 'w') as outfile:
    json.dump(json_data, outfile)
