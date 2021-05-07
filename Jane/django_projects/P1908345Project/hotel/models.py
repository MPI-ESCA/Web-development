# hotel/models.py
from django.db import models
from django.urls import reverse


# Create your models here.
class Residence(models.Model):
    title = models.CharField(max_length=200)
    estate = models.TextField()
    gross_area = models.TextField()
    rent = models.IntegerField()
    bedrooms = models.IntegerField()
    expected_tenants = models.IntegerField()
    created = models.DateField(auto_now_add=True)
    updated = models.DateField()

    def __str__(self):
        return self.title
    def get_absolute_url(self):
        return reverse('residence_detail', args=[str(self.id)])
