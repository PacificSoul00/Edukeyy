from django.contrib.auth import get_user_model
from django.contrib.auth.forms import AuthenticationForm

User = get_user_model()

class LoginFormularioUsuarioPersonalizado(AuthenticationForm):
    class Meta:
        model = User
        fields = ['username', 'password']