from django.urls import path
from . import views
from .views import quiz_form, thank_you

urlpatterns = [
    path('', views.home, name='home'),
    path('quiz/', quiz_form, name='quiz_form'),
    path('thank-you/', thank_you, name='thank_you'),
]