"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import CategoryViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_detail),
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    path('categories/', views.category_list),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.category_products),
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view()),
    path('', include(router.urls)),
]
"""

from django.urls import path
from api import views

urlpatterns = [
    # Категории
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view()),

    # Товары
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
]