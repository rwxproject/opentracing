import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comms } from './comms';

const serverAddress = 'localhost';
const serverPort = '10000';

@Injectable({
  providedIn: 'root'
})
export class CommsService {
  // constructor(private http: HttpClient) {}
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Comms>(`http://${serverAddress}:${serverPort}/api`);
  }
}
