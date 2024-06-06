import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'second-project';

  public velosity1!:number;
  public height1!:number;
  public velosity2!:number;
  public height2!:number;
  public gravity:number = 9.81;
  public answer1!:number;
  public answer2!:number;

  knowVelosity()
  {
    this.answer1 = (this.velosity1*this.velosity1)/(2*9.81);
  }

  knowHight()
  {
    this.answer2= 2*(Math.sqrt(this.height2*9.81));
  }


}
