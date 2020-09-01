from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import *

images_router = DefaultRouter()
images_router.register('images', ImageViewSet, base_name='images')

urlpatterns = [
    path('', include(images_router.urls)),
]