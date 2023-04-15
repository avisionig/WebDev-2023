import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from api.models import Company, Vacancy, companies, vacancies

from api.serializers import CompanySerializer, VacancySerializer


# Create your views here.


@csrf_exempt
def get_company(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == "GET":
        company = Company.objects.get(pk=company_id)
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, status=200)
    elif request.method == "PUT":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            company.save()
            return JsonResponse(serializer.data)
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"deleted": True})


@csrf_exempt
def get_companies(request):
    if request.method == "GET":
        serializer = CompanySerializer(companies(), many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse({'error': 'bad request'}, status=400)


def vacancies_by_company(request, company_id):
    company = Company.objects.get(pk=company_id)
    vacancies_ = [v for v in vacancies() if v.company.name == company.name]
    serializer = VacancySerializer(vacancies_, many=True)
    return JsonResponse(serializer.data, safe=False)


def top_ten(request):
    top = Vacancy.objects.all().order_by('-salary')[:10]
    serializer = VacancySerializer(top, many=True)
    return JsonResponse(serializer.data, safe=False)
