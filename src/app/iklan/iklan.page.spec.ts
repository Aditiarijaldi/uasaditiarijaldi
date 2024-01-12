import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IklanPage } from './iklan.page';

describe('IklanPage', () => {
  let component: IklanPage;
  let fixture: ComponentFixture<IklanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IklanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
