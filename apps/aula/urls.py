from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import DjangoAulaView

router = DefaultRouter()
router.register(r'', DjangoAulaView, basename='aulas')

urlpatterns = [
    path('', include(router.urls)),
]