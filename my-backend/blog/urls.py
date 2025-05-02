from django.urls import path
from .views import post_list, PostDetailBySlugView, CommentListCreateView

urlpatterns = [
    path('api/posts/', post_list),
    path('api/posts/<slug>/', PostDetailBySlugView.as_view(), name='post-detail'),
    path('api/comments/', CommentListCreateView.as_view()),
]
