'''
Created on 23/09/2016

@author: ave
'''


from django.conf import settings
from django.conf.urls import include, url, patterns
from django.contrib import admin

from Front import views


urlpatterns = [

    url(r'^$', views.VistaIndex, name='index'),
    url(r'^test/$', views.VistaPrueba2, name='vistaprueba'),


    url(r'^Jose-Cruz-Estefania-Almanza/$', views.JoseCruzEstefaniaAlmanza, name='Jose-Cruz-Estefania-Almanza'),
    url(r'^Aldo-Rodriguez-Morales/$', views.AldoRodriguezMoralesView.as_view(), name='AldoRodriguez'),
    url(r'^Diego-Licea-Antonio/$', views.diego, name='front.diego'),

]

if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^Media/(?P<path>.*)$', 'django.views.static.serve',
            {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),

    )
