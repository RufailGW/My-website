import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  html = '100%';
  css = '95%';
  py = '95%';
  js = '80%';
  njs = '90%';
  ang = '95%';
  linux = '100%';
  ml = '60%';
  pico = '30%';


  constructor() { 

    

  }
 
  



  async ngOnInit(): Promise<void> {

    function delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }

    (document.querySelector("#html") as HTMLElement).animate([{ width: this.html}], {duration: 2000, fill: 'forwards' });
    await delay(500);
    (document.querySelector("#css") as HTMLElement).animate([{ width: this.css}], {duration: 1800, fill: 'forwards' });
    await delay(500);
    (document.querySelector("#py") as HTMLElement).animate([{ width: this.py}], {duration: 1600, fill: 'forwards' });
    await delay(500);
    (document.querySelector("#js") as HTMLElement).animate([{ width: this.js}], {duration: 1400, fill: 'forwards' });
    await delay(500);
    (document.querySelector("#njs") as HTMLElement).animate([{ width: this.njs}], {duration: 1200, fill: 'forwards' });
    await delay(500);
    (document.querySelector("#ang") as HTMLElement).animate([{ width: this.ang}], {duration: 1000, fill: 'forwards' });
    await delay(500);
    (document.querySelector("#linux") as HTMLElement).animate([{ width: this.linux}], {duration: 800, fill: 'forwards' });
    await delay(500);
    (document.querySelector("#ml") as HTMLElement).animate([{ width: this.ml}], {duration: 600, fill: 'forwards' });
    await delay(500);
    (document.querySelector("#pico") as HTMLElement).animate([{ width: this.pico}], {duration: 400, fill: 'forwards' });



    
  }

  


}
