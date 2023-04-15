from rest_framework import serializers
from api.models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    address = serializers.CharField()
    city = serializers.CharField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')

