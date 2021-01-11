import { TestBed } from '@angular/core/testing';

import { CursoDestacadoService } from './curso-destacado.service';

describe('CursoDestacadoService', () => {
  let service: CursoDestacadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoDestacadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
