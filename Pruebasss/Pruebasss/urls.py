from django.conf import settings
from django.conf.urls import include, url, patterns
from django.contrib import admin

import Front


urlpatterns = [
    # Examples:
    # url(r'^$', 'Pruebasss.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('Front.urls')),

]

if settings.DEBUG:
    urlpatterns += patterns('',
        (r'^Media/(?P<path>.*)$', 'django.views.static.serve',
            {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),
        
    )
