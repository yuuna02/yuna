import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YunashopComponent } from './yunashop.component';

describe('YunashopComponent', () => {
  let component: YunashopComponent;
  let fixture: ComponentFixture<YunashopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YunashopComponent]
    });
    fixture = TestBed.createComponent(YunashopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
