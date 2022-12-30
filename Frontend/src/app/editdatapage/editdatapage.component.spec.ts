import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdatapageComponent } from './editdatapage.component';

describe('EditdatapageComponent', () => {
  let component: EditdatapageComponent;
  let fixture: ComponentFixture<EditdatapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdatapageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdatapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
