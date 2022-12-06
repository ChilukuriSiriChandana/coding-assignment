import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedFavPageComponent } from './added-fav-page.component';

describe('AddedFavPageComponent', () => {
  let component: AddedFavPageComponent;
  let fixture: ComponentFixture<AddedFavPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedFavPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedFavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
