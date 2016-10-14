from django.shortcuts import render
from Front.models import UsuariosUaq

# Create your views here.

def VistaIndex(request):
    contexto={}
    return render(request, 'Front/index.html',contexto)

def VistaPrueba2(request):
    contexto={}
    alumnos=UsuariosUaq.objects.all()
    sumatotal=0
    for alumno in alumnos:
        sumatotal=sumatotal+alumno.promedio
    print "Esta es una linea"
    promedioGeneral=sumatotal/alumnos.count()
    contexto['PromedioGeneral']=promedioGeneral
    contexto['usersFuture']=UsuariosUaq.objects.filter(promedio__gte=8.0)
    contexto['usersNoFuture']=UsuariosUaq.objects.filter(promedio__lte=8.0)
    
    contexto['NoHope']=UsuariosUaq.objects.filter(dado_de_bajo=True)
    
    return render(request, 'Front/prueba.html',contexto)