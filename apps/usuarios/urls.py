from django.urls import path
from .views import LoginView
from .views import UserDetailView

urlpatterns = [
    path('login/', LoginView.as_view(), name='list_registros'),
    path('usuario/<str:rut>/', UserDetailView.as_view()),
]