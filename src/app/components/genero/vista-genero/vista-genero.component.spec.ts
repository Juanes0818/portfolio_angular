import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGeneroComponent } from './vista-genero.component';

describe('VistaGeneroComponent', () => {
  let component: VistaGeneroComponent;
  let fixture: ComponentFixture<VistaGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaGeneroComponent]
    });
    fixture = TestBed.createComponent(VistaGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
