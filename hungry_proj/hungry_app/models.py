from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] # Email & Password are required by default.

class Recipe(models.Model):
    label = models.CharField(max_length=255, blank=False)
    image = models.TextField()
    url = models.TextField()
    user = models.ManyToManyField(AppUser, related_name="recipes")



    def __str__(self):
        return self.label


