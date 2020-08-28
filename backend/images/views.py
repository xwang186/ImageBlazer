import os
import base64
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.shortcuts import render, HttpResponse
from django.conf import settings

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import views
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FileUploadParser

# Create your views here.
class ImageViewSet(viewsets.ViewSet):

    parser_classes = (MultiPartParser,)
 
    @action(detail=False, methods=['GET'])
    def test(self, request, format=None):
        return Response({'msg': 'ok'})


    @action(detail=False, methods=['POST'])
    def process(self, request, format=None):
        image = request.FILES['image']
        extension = image.name.split('.')[-1]

        image_data = base64.b64encode(image.read()).decode('utf-8')

        # store image in local file
        # image_data = ContentFile(image.read())
        # path = default_storage.save('tmp/test'+extension, image_data)
        # tmp_file = os.path.join(settings.MEDIA_ROOT, path)
        print(settings.MEDIA_ROOT)

        # print(image)
        # print(image_data)
        return HttpResponse(image_data, content_type='image/'+extension)