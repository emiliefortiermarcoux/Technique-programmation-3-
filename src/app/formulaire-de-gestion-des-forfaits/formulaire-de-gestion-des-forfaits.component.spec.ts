import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDeGestionDesForfaitsComponent } from './formulaire-de-gestion-des-forfaits.component';

describe('FormulaireDeGestionDesForfaitsComponent', () => {
  let component: FormulaireDeGestionDesForfaitsComponent;
  let fixture: ComponentFixture<FormulaireDeGestionDesForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDeGestionDesForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDeGestionDesForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
