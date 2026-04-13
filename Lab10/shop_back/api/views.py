from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category
from .serializers import CategorySerializer, ProductSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
def product_list(request):
    products = Product.objects.all()
    data = {"products": list(products.values())}
    return JsonResponse(data)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category_id
    }
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = {"categories": list(categories.values())}
    return JsonResponse(data)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {
        "id": category.id,
        "name": category.name
    }
    return JsonResponse(data)

def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category=category)
    data = {"products": list(products.values())}
    return JsonResponse(data)