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

]

if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^Media/(?P<path>.*)$', 'django.views.static.serve',
            {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),
        
    )
