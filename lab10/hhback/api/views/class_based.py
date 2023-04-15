import json

from django.http import JsonResponse
from api.models import Company, Vacancy, companies, vacancies
from rest_framework.views import APIView

from api.serializers import VacancySerializer


class VacancyList(APIView):
    def get(self, request, *args, **kwargs):
        serializer = VacancySerializer(vacancies(), many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    def put(self, request, *args, **kwargs):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse({'error': 'bad request'}, status=400)


class VacancyDetail(APIView):
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)

    def get(self, request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)

    def put(self, request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error':'bad request'}, status=400)

    def delete(self,request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        vacancy = self.get_object(pk)
        vacancy.delete()
        return JsonResponse({'delete': True}, status=204)
