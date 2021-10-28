import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  html = '100%';
  css = '95%';
  py = '95%';
  js = '80%';
  njs = '90%';
  ang = '95%';
  linux = '100%';
  ml = '60%';
  pico = '10%';


  ngOnInit(): void {

    (document.querySelector('#html') as HTMLElement).style.width= this.html;
    (document.querySelector('#css') as HTMLElement).style.width= this.css;
    (document.querySelector('#py') as HTMLElement).style.width= this.py;
    (document.querySelector('#js') as HTMLElement).style.width= this.js;
    (document.querySelector('#njs') as HTMLElement).style.width= this.njs;
    (document.querySelector('#ang') as HTMLElement).style.width= this.ang;
    (document.querySelector('#linux') as HTMLElement).style.width= this.linux;
    (document.querySelector('#ml') as HTMLElement).style.width= this.ml;
    (document.querySelector('#pico') as HTMLElement).style.width= this.pico;
  }

  


}
