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
    author = serializers.StringRelatedField()  # Assuming you have an 'author' field in Comment

    class Meta:
        model = Comment
        fields = ['id', 'post', 'parent', 'author', 'content', 'created_at', 'replies']

class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'slug', 'excerpt', 'created_at', 'image']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at', 'image', 'slug']

class PostDetailSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'slug', 'excerpt', 'content', 'image', 'created_at', 'comments']