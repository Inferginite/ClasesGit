# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UsuariosUaq',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre_usario', models.CharField(max_length=500)),
                ('expediente', models.IntegerField(max_length=6)),
                ('facultad', models.CharField(max_length=20, choices=[(b'Ciencias Naturales', b'Ciencias Naturales'), (b'Informatica', b'Informatica'), (b'Ingenieria', b'Ingenieria'), (b'Lenguas y Letras', b'Lenguas y Letras')])),
                ('promedio', models.FloatField()),
                ('dado_de_bajo', models.BooleanField(default=False)),
            ],
        ),
    ]
