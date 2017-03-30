from django.shortcuts import render
from .models import Article
from rest_framework import viewsets
from .serializers import ArticleSerializer

# Create your views here.


class ArticleViewSet(viewsets.ModelViewSet):
    '''
    API endpoint that allows articles to be viewed or edited.
    '''
    queryset = Article.objects.all().order_by('-pub_date')
    serializer_class = ArticleSerializer
