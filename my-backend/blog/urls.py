from django.urls import path
from . import views

urlpatterns = [
    # Endpoint to retrieve all posts
    path('posts/', views.post_list, name='post-list'),
    
    # Endpoint to retrieve a single post by its slug
    path('posts/<slug:slug>/', views.PostDetailBySlugView.as_view(), name='post-detail'),
    
    # Endpoint to list and create comments for a specific post by its slug
    path('posts/<slug:slug>/comments/', views.CommentListCreateView.as_view(), name='comment-list-create'),
    
    # Endpoint to list and create replies for a specific comment by parent comment ID
    path('posts/<slug:slug>/comments/<int:parent_comment_id>/replies/', views.CommentReplyCreateView.as_view(), name='comment-reply-create'),
]
