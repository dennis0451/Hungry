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

# class CookBook(models.Model):
#     name = models.CharField(max_length=255, blank=False)

#     def __str__(self):
#         return self.name

# # Create your models here.


# class Recipe(models.Model):
#     title = models.CharField(max_length=255, blank=False)
#     price = models.CharField(max_length=255)
#     description = models.CharField(max_length=255)
#     category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

#     def __str__(self):
#         return self.title