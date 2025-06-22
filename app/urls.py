# department/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/departments/', views.department_list_create, name='department-list-create'),
    path('api/departments/<int:pk>/', views.department_detail, name='department-detail'),
    path('api/role/', views.RoleListCreateView.as_view(), name='role-list-create'),
    path('api/role/<int:pk>/', views.RoleDetailView.as_view(), name='role-detail'),
]
