from rest_framework import serializers
from teami.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'username')

class loginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')