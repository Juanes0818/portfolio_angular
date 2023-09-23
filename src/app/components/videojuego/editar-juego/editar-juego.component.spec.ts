import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJuegoComponent } from './editar-juego.component';

describe('EditarJuegoComponent', () => {
  let component: EditarJuegoComponent;
  let fixture: ComponentFixture<EditarJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarJuegoComponent]
    });
    fixture = TestBed.createComponent(EditarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
