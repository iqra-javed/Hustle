from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4
from multiselectfield import MultiSelectField

class Application(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    point_of_contact_name = models.CharField(blank=True, max_length=100)
    point_of_contact_number = models.PositiveIntegerField(blank=True)
    point_of_contact_email = models.EmailField(blank=True, max_length=100)
    source_of_job = models.CharField(blank=True, max_length=255)
    link_to_job_posting = models.URLField(blank=True)
    notes = models.TextField(blank=True)
    heart_it = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)


class UserApplication(Application):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
