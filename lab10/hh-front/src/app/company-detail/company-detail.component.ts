import {Component, Input, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {VacanciesService} from "../vacancies.service";
import {ActivatedRoute} from "@angular/router";
import {CompaniesService} from "../companies.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit{
  vacancies: Vacancy[] = [];
  newVacancyName = '';
  newVacancySalary = 0;
  newVacancyDescription = '';
  newVacancyCompany = '';
  id: number = 0;
  constructor(private companyService: CompaniesService ,private vacancyService: VacanciesService, private route:ActivatedRoute) {
  }
  ngOnInit(){
    this.companyService.selectedId$.subscribe((data) =>{
      this.id = data;
    })
    if(this.id != 1){
      this.route.paramMap.subscribe(param =>{
        let _id = param.get('id');
        if(_id){
          this.id = +_id;
        }
      })
    }
    this.getVacancies(this.id);
  }

  getVacancies(id: number){
    this.vacancyService.getVacancies(id).subscribe((vacancies)=>{
      this.vacancies = vacancies;
    })
  }
  createVacancy(){
    if(this.newVacancyCompany.length && this.newVacancySalary &&
      this.newVacancyDescription.length && this.newVacancyCompany){
      this.vacancyService.createVacancy(this.newVacancyName, this.newVacancyDescription, this.newVacancySalary ,this.newVacancyCompany).
      subscribe(vacancy =>{
        this.vacancies.push(vacancy);
        this.newVacancyCompany = '';
        this.newVacancyName = '' ;
        this.newVacancySalary = 0;
        this.newVacancyDescription = '';
      })
    }
  }
}
