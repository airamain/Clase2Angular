import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private service: CharacterService) { }

  async ngOnInit() {
    const character: any = await this.service.getAll();
    console.log(character.results);
  }

}
