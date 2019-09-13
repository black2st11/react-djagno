from rest_framework import serializers
from head.models import Head


class HeadSerailizer(serializers.ModelSerializer):
    class Meta:
        model = Head
        fields = '__all__'