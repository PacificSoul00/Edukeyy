from django.urls import path
from .views import * 

urlpatterns = [
    path('', listRegistrosView.as_view(), name='list_registros'),
    path('polling/', RegistroLongPollingView.as_view(), name='estudiante_polling')
]