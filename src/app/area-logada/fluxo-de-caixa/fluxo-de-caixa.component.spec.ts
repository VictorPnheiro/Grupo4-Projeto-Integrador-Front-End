import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoDeCaixaComponent } from './fluxo-de-caixa.component';

describe('FluxoDeCaixaComponent', () => {
  let component: FluxoDeCaixaComponent;
  let fixture: ComponentFixture<FluxoDeCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxoDeCaixaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxoDeCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
