from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4
from multiselectfield import MultiSelectField

class Application(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    point_of_contact_name = models.CharField(max_length=100)
    point_of_contact_number = models.PositiveIntegerField()
    point_of_contact_email = models.EmailField(max_length=100)
    source_of_job = models.CharField(max_length=255)
    link_to_job_posting = models.URLField()
    notes = models.TextField(blank=True)
    TIMELINE_CHOICES = (
        ('Submitted Job Application', 'Submitted Job Application'),
        ('Whiteboarding', 'Whiteboarding'),
        ('Code Test', 'Code Test'),
        ('On-Site Interview', 'On-Site Interview'),
        ('Received Response', 'Received Response'),
        ('Phone Interview', 'Phone Interview'),
    )
    timeline = MultiSelectField(choices=TIMELINE_CHOICES)
    heart_it = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)


class User_Application(Application):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
