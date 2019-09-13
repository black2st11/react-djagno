from django.urls import path
from rest_framework import routers
from .api import HeadViewSet

router = routers.DefaultRouter()
router.register('api/heads', HeadViewSet, 'head')

urlpatterns = router.urls