from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.decorators import api_view

from .models import Post, Comment
from .serializers import PostListSerializer, PostSerializer, CommentSerializer

# GET all posts (used in blog list)
@api_view(['GET'])
def post_list(request):
    posts = Post.objects.all().order_by('-created_at')
    serializer = PostListSerializer(posts, many=True)
    return Response(serializer.data)

# GET single post by slug (used in blog detail page)
class PostDetailBySlugView(APIView):
    def get(self, request, slug):
        try:
            post = Post.objects.get(slug=slug)
            serializer = PostSerializer(post)
            return Response(serializer.data)
        except Post.DoesNotExist:
            return Response({"detail": "Post not found"}, status=status.HTTP_404_NOT_FOUND)

# GET and POST comments for a post
class CommentListCreateView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        post_id = self.request.query_params.get('post')
        return Comment.objects.filter(post_id=post_id, parent=None)
