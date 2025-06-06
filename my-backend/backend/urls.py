from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),
    path('', lambda request: JsonResponse({'message': 'API is running'})),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
