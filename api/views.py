from rest_framework import generics
from .models import School
from .serializers import SchoolSerializer


# Create your views here.
class SchoolListView(generics.ListAPIView):
    """
    GET api/v1/schools/
    """
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
