from django.db import models
# Create your models here.


class UsuariosUaq(models.Model):
    Mis_Opciones= (
        ('Ciencias Naturales', 'Ciencias Naturales'),
        ('Informatica', 'Informatica'),
        ('Ingenieria', 'Ingenieria'),
        ('Lenguas y Letras', 'Lenguas y Letras'),
    )
    nombre_usario=models.CharField(max_length=500)
    expediente=models.IntegerField()
    facultad=models.CharField(max_length=20, choices=Mis_Opciones)
    promedio=models.FloatField()
    dado_de_bajo=models.BooleanField(default=False)
    def __unicode__(self):
        return self.nombre_usario +' '+ str(self.promedio)

class ModelCruzEstefania(models.Model):
    usuario=models.ForeignKey("UsuariosUaq", on_delete=models.CASCADE)
    hora=models.TimeField()
    creacion=models.DateTimeField("Creado",auto_now_add=True)
    reporte_de_alguien=models.CharField(max_length=500)
    numero_de_reporte=models.IntegerField()

    class Meta:
         verbose_name = "ModeloCruz"

    def __unicode__(self):
        return str(self.numero_de_reporte)