from rest_framework import serializers
from .models import Post, Comment
from django.contrib.auth.models import User

# Recursive serializer for threaded replies
class RecursiveField(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data

class CommentSerializer(serializers.ModelSerializer):
    replies = RecursiveField(many=True, read_only=True)
    post_title = serializers.CharField(source='post.title', read_only=True)  # Optional: include post title for context

    class Meta:
        model = Comment
        fields = [
            'id', 'post', 'post_title', 'parent',
            'name', 'email', 'content', 'created_at', 'replies'
        ]
        ordering = ['created_at']  # Optional: for consistent ordering if not in model

class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'slug', 'excerpt', 'created_at', 'image']

class PostSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at', 'image', 'slug']

class PostDetailSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'slug', 'excerpt',
            'content', 'image', 'created_at', 'comments'
        ]
