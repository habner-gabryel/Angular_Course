import { TestBed } from '@angular/core/testing';

import { DataService } from '../services/data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar uma lista de usuários', () => {
    const usuariosMock = [{ id: 1, name: 'João' }, { id: 2, name: 'Habner'}];
    
    service.getUsuarios().subscribe(usuarios => {
      expect(usuarios).toEqual(usuariosMock);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(usuariosMock);

    httpMock.verify();
  });
});
