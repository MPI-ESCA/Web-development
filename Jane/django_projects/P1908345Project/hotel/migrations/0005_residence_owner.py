# Generated by Django 2.2.17 on 2021-05-07 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0004_remove_residence_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='residence',
            name='owner',
            field=models.CharField(default=None, max_length=200),
            preserve_default=False,
        ),
    ]
