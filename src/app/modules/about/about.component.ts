import { Component, OnInit } from '@angular/core';

export interface Tile {
  headerColor: string;
  fieldColor: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  projectTask_image: string = "assets/about-img/project_tasks.jpg";
  raidLog_image: string = "assets/about-img/raid_log.jpg";
  boq_image: string = "assets/about-img/bill_of_quantities.png";
  siteReports_image: string = "assets/about-img/site_reports2.jpg";
  generalReports_image: string = "assets/about-img/site_reports1.png";


  projectsLeft: Tile[] = [
    {cols: 2.5, rows: 1, headerColor:'feSpecularLighting', fieldColor: '#DCDCDC',
      text:''}
    ];

  projectsRight: Tile[] = [
    {cols: 1.5, rows: 1, headerColor:'#9F9D9D', fieldColor: '#DCDCDC', text:''}
    ];

  raidLogLeft: Tile[] = [
    {cols: 1.5, rows: 1, headerColor:'feSpecularLighting', fieldColor: '#DCDCDC', text:''}
  ];
  raidLogRight: Tile[] = [
    {cols: 2.5, rows: 1, headerColor:'#9F9D9D', fieldColor: '#DCDCDC',
      text: ''}
  ];

  boqLeft: Tile[] = [
    {cols: 2.5, rows: 1, headerColor:'feSpecularLighting', fieldColor: '#DCDCDC',
      text:''}
  ];

  boqRight: Tile[] = [
    {cols: 1.5, rows: 1, headerColor:'#9F9D9D', fieldColor: '#DCDCDC', text:''}
  ];

  siteReportsLeft: Tile[] = [
    {cols: 1.5, rows: 1, headerColor:'feSpecularLighting', fieldColor: '#DCDCDC', text:''}
  ];

  siteReportsRight: Tile[] = [
    {cols: 2.5, rows: 1, headerColor:'#9F9D9D', fieldColor: '#DCDCDC',
      text:''}
  ];

  generalReportsLeft: Tile[] = [
    {cols: 2.5, rows: 1, headerColor:'feSpecularLighting', fieldColor: '#DCDCDC',
      text:''}
  ];

  generalReportsRight: Tile[] = [
    {cols: 1.5, rows: 1, headerColor:'#9F9D9D', fieldColor: '#DCDCDC', text:''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
