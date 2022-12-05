import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutosComponent } from './listar-produtos.component';

describe('ListarProdutosComponent', () => {
  let component: ListarProdutosComponent;
  let fixture: ComponentFixture<ListarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
