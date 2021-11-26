import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{


  //This is the equ of your useEffect
  ngOnInit(): void {
    
    const ref=  setInterval(()=>
      {
        this.time--;


        console.log(this.time);
        if(this.time===0)
        {
          clearInterval(ref);
        }

      },1000);


  }
 

  title:string= "Matrix 4";
  imageName :string ="/assets/img/matrix4.jpeg";
  time:number = 90;
  movies:string[]=["Avatar 2","Titanic","The Matrix", "Avenger:Infinity Wars","Bad Boys II"];



  doSomething()
  {
    window.alert("Yay, you clicked me")
  }

  changeToSpiderman()
  {
    this.title="Spiderman : No Way Home"
    this.imageName = "/assets/img/spiderman.jpeg";
  }


  changeToMatrix4()
  {
    this.title= "Matrix 4";
    this.imageName ="/assets/img/matrix4.jpeg";
  }




}
