import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
declare var anime: any;              // declare like this



@Component({
  selector: 'app-presentation-component',
  templateUrl: './presentation-component.component.html',
  styleUrls: ['./presentation-component.component.css']
})
export class PresentationComponentComponent  implements AfterViewInit {
  cheminImage:any="url/Prensent.png"
  ngAfterViewInit(): void {
    // Wrap every letter in a span
const textWrapper = document.querySelector('.an-1');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.an-1 .letter',
  scale: [4,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 950,
  delay: (el:any, i:any) => 70*i
}).add({
  targets: '.an-1',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
  });


  }


}
