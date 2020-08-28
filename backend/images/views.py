import os
import base64
import io
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.shortcuts import render, HttpResponse
from django.conf import settings

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import views
from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FileUploadParser

from PIL import Image
import numpy as np

# Create your views here.
class ImageViewSet(viewsets.ViewSet):

    parser_classes = (MultiPartParser,)
 
    @action(detail=False, methods=['GET'])
    def test(self, request, format=None):
        return Response({'msg': 'ok'})


    @action(detail=False, methods=['POST'])
    def process(self, request, format=None):

        # read uploaded image
        image = request.FILES['image']
        extension = image.name.split('.')[-1]

        # algorthm to change image grey-scale
        img = Image.open(io.BytesIO(image.read()))
        pixels = img.load()

        w, h = img.size
        for i in range(w):
            for j in range(h):
                R = pixels[i, j][0]
                G = pixels[i, j][1]
                B = pixels[i, j][2]
                gray = R*0.299 + G*0.587 + B*0.114
                pixels[i, j] = (int(gray), int(gray), int(gray))
        buffered = io.BytesIO()
        img.save(buffered, format='png')
        result_image = base64.b64encode(buffered.getvalue())

        # store image in local file
        # image_data = ContentFile(image.read())
        # path = default_storage.save('tmp/test.'+extension, image_data)
        # tmp_file = os.path.join(settings.MEDIA_ROOT, path)

        return HttpResponse(result_image, content_type='image/'+extension)
