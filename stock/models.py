from django.db import models

class Stock(models.Model):
    def __str__(self):
        return self.name

    name = models.CharField(max_length=20, unique=True)
    last_price = models.DecimalField(max_digits=15, decimal_places=2)
    change = models.DecimalField(max_digits=15, decimal_places=2)
    pchange = models.DecimalField(max_digits=15, decimal_places=2)

