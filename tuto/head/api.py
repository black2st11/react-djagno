from head.models import Head
from rest_framework import viewsets, permissions
from .serializers import HeadSerailizer

class HeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    queryset = Head.objects.all()
    serializer_class = HeadSerailizer

    def get_queyset(self):
        return self.request.user.heads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    