import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseService {

  // exstends BaseService seria heredar todo ( hereda todas las funciones ) lo que tengo en BaseService 

  // extnds servicio: hereda todas las finciones del servicio.(get setEnpoint, handlerError)

  getAll() {
    // para hacer el get necesito mi endpoint 
    this.setEndPoint('character');
    return this.get();
  }

}
