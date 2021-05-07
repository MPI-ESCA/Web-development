from django.urls import path
from . import views
urlpatterns = [
    path('', views.ResidenceListView.as_view(), name='home'),
    path('residence/new/', views.ResidenceCreateView.as_view(), name='residence_new'),
    path('residence/<int:pk>/', views.ResidenceDetailView.as_view(), name='residence_detail'),
    path('residence/<int:pk>/edit/', views.ResidenceUpdateView.as_view(), name='residence_edit'),
    path('residence/<int:pk>/delete/', views.ResidenceDeleteView.as_view(), name='residence_delete'),
]