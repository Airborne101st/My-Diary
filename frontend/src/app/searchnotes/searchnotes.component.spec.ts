import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchnotesComponent } from './searchnotes.component';

describe('SearchnotesComponent', () => {
  let component: SearchnotesComponent;
  let fixture: ComponentFixture<SearchnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchnotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
