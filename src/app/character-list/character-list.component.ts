import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GotApiService } from '../got-api.service';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  public characters: any = [];
 constructor (private serv:GotApiService, private http:HttpClient) {}
 ngOnInit(){
  this.serv.getCharacters().subscribe(
    data => {
      this.characters=data
      console.log(data)})
 }
}
