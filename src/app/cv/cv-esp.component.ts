import { Component, OnInit } from '@angular/core';
import * as dataEsp from '../../assets/api/cv/cv-esp.json';
import * as dataEng from '../../assets/api/cv/cv-eng.json';


import { cvClassDto } from './dtos/cvClassDto.js';
@Component({
  selector: 'app-cv-esp',
  templateUrl: './cv-esp.component.html',
  styleUrls: ['./cv-esp.component.less']
})
export class CvEspComponent implements OnInit {

  constructor() { }
  public country: string = "ES";
  public cv:cvClassDto;


  ngOnInit() {
    this.setCVCountry();
  }

  public setCVCountry() {
    if (this.country == "ES") {
      console.log("dataEsp",dataEsp['default']);
      this.cv = dataEsp['default'];

    }
    else {
      console.log("dataEng",dataEng['default']);
      this.cv = dataEng['default'];
    }
  }
  public changeLenguage() {
    if (this.country == "ES") {
      this.country = "EN";
    }
    else {
      this.country = "ES";
    }
    this.setCVCountry();
  }

  public isOpenTitle1 = true;
  public openTitle1() {
    this.isOpenTitle1 = !this.isOpenTitle1;
  }

  public isOpenTitle2 = true;
  public openTitle2() {
    this.isOpenTitle2 = !this.isOpenTitle2;
  }

  public isOpenTitle3 = true;
  public openTitle3() {
    this.isOpenTitle3 = !this.isOpenTitle3;
  }

}

