import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLData } from 'src/app/Models/URLData';
import { URLService } from 'src/app/services/URL.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { URLModel } from 'src/app/Models/URLModel';
@Component({
  selector: 'app-list-urls',
  templateUrl: './list-urls.component.html',
  styleUrls: ['./list-urls.component.css']
})
export class ListURLsComponent implements OnInit {
  p:number =1;
  List:URLData[]=  []
  base:string=""
  url:any="";
  Form= new  FormGroup({ 
  url: new FormControl('',[
    Validators.required
    ,Validators.pattern('https?://.+')])});
  constructor(private URLService:URLService,private router: Router) { }
  URL= new URLModel();
  ngOnInit(): void {
    this.URLService.GetALL().subscribe((e)=>{
      this.List=e;
    })
    this.base=window.location.origin+'/';
    
  }
  ClickURL(url:string)
  {
    window.open(url)
  }
  Submit(){
    const formValue = this.Form.value;
    if(this.Form.valid)
    {
      this.URL.url = formValue.url;
      this.URLService.Add(this.URL).subscribe((e)=>{
        window.location.reload()
      })
    }
  }
  get getControl(){
    return this.Form.controls;
  }

}
