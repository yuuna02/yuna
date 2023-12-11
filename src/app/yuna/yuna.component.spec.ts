import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YunaComponent } from './yuna.component';

describe('YunaComponent', () => {
  let component: YunaComponent;
  let fixture: ComponentFixture<YunaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YunaComponent]
    });
    fixture = TestBed.createComponent(YunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
