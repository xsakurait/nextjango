# from django.shortcuts import render
from rest_framework import generics
from .models import Work
from .serializers import WorkSerializer

class WorkList(generics.ListCreateAPIView):
    query_set=Work.objects.all()
    serializer_class=WorkSerializer
# Create your views here.
