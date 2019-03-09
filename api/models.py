from django.db import models


# Create your models here.
class School(models.Model):
    district = models.CharField(max_length=20)
    block = models.CharField(max_length=20)
    cluster = models.CharField(max_length=50)
    schoolid = models.BigIntegerField(primary_key=True)
    schoolname = models.CharField(max_length=50)
    category = models.CharField(max_length=20)
    gender = models.CharField(max_length=10)
    medium_of_inst = models.CharField(max_length=10)
    address = models.CharField(max_length=200)
    area = models.CharField(max_length=100)
    pincode = models.CharField(max_length=10)
    landmark = models.CharField(max_length=100)
    identification1 = models.CharField(max_length=100)
    busroutes = models.CharField(max_length=100)
    identification2 = models.CharField(max_length=100)
    latlong = models.CharField(max_length=30)

    def __str__(self):
        return self.schoolname
