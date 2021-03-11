import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  ServiceValue = 'Hello World!';
  constructor() { }
}
