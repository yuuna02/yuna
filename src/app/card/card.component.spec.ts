import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { AppModule } from '../app.module';

describe('CardComponent', () => {
 let component: CardComponent;
 let fixture: ComponentFixture<CardComponent>;

 beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
 });

 it('should create', () => {
    expect(component).toBeTruthy();
 });
});