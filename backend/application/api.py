from rest_framework import serializers, viewsets
from .models import Application, UserApplication



class UserApplicationSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = UserApplication
        fields = (
            'company',
            'position', 
            'point_of_contact_name', 
            'point_of_contact_number',
            'point_of_contact_email',
            'source_of_job',
            'link_to_job_posting',
            'notes',
            )
    
    def create(self, validated_data):
        # import pdb; pdb.set_trace() ''' debugger '''
        user = self.context['request'].user
        user_application = UserApplication.objects.create(user=user, **validated_data)
        return user_application

class UserApplicationViewSet(viewsets.ModelViewSet):
    serializer_class = UserApplicationSerializer
    queryset = UserApplication.objects.none()

    def get_queryset(self):
        user = self.request.user

        ''' if user is not logged in '''
        if user.is_anonymous:
            return UserApplication.objects.none()
        else: 
            return UserApplication.objects.filter(user=user)
