from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404

from .models import Post, Comment
from .serializers import (
    PostListSerializer,
    PostDetailSerializer,
    CommentSerializer
)

# GET all posts (used in blog list)
@api_view(['GET'])
@permission_classes([AllowAny])  # Allow public access
def post_list(request):
    posts = Post.objects.all().order_by('-created_at')
    serializer = PostListSerializer(posts, many=True)
    return Response(serializer.data)

# GET single post by slug (used in blog detail page)
class PostDetailBySlugView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, slug):
        post = get_object_or_404(Post, slug=slug)
        serializer = PostDetailSerializer(post)
        return Response(serializer.data)

# GET and POST top-level comments for a post
class CommentListCreateView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        slug = self.kwargs['slug']
        post = get_object_or_404(Post, slug=slug)
        return Comment.objects.filter(post=post, parent=None).order_by('-created_at')

    def perform_create(self, serializer):
        slug = self.kwargs['slug']
        post = get_object_or_404(Post, slug=slug)
        serializer.save(post=post)

# GET and POST replies to a specific comment
class CommentReplyCreateView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        parent_comment_id = self.kwargs['parent_comment_id']
        return Comment.objects.filter(parent_id=parent_comment_id).order_by('-created_at')

    def perform_create(self, serializer):
        parent_comment_id = self.kwargs['parent_comment_id']
        parent_comment = get_object_or_404(Comment, id=parent_comment_id)
        serializer.save(parent=parent_comment, post=parent_comment.post)  # Ensure post linkage
