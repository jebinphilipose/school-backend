import os
import json
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'school_backend.settings')
django.setup()

from api.models import School

with open('bangalore_schools.json', 'r') as f:
    json_data_list = json.load(f)


# Create School Objects
objs = []
School.objects.all().delete()

for item_dict in json_data_list:
    obj = School(**item_dict)
    objs.append(obj)

School.objects.bulk_create(objs)
