from django.urls import path
from .views import WorkList

urlpatterns = [
    path("works/", WorkList.as_view(), name="work-list"),
]
