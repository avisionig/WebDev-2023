import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Company} from '../models'
import {CompaniesService} from "../companies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  companies: Company[] = [];
  newCompanyName: string = '';
  newCompanyDescription: string = '';
  newCompanyCity: string = '';
  newCompanyAddress: string = '';
  constructor(private companyService: CompaniesService) {
  }

  onSelectedId(id: number){
    this.companyService.setId(id);
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((companies)=>{
      this.companies = companies;
    })
  }

  addCompany(){
    if(this.newCompanyName.length && this.newCompanyCity.length &&
      this.newCompanyDescription.length && this.newCompanyAddress){
      this.companyService.createCompany(this.newCompanyName, this.newCompanyAddress, this.newCompanyCity, this.newCompanyDescription).
      subscribe((company) => {
        this.companies.push(company);
        this.newCompanyName = '';
        this.newCompanyDescription = '';
        this.newCompanyCity = '';
        this.newCompanyAddress = '';
      });
    }
  }
}
