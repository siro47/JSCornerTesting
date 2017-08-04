import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { CardComponent } from './card.component';
import {ColorizerService} from "../colorizer.service";

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [ ColorizerService ],
      imports: [NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.data = {title: 'mytitle', extendedInfo: 'mydesc', footer: 'myfooter'}
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('card shows details when clicked - ts level', () => {
    component.changeState();
    expect(component.cardStatus).toBe('details');
  });

  it('card shows details when clicked - html level', () => {
    fixture.nativeElement.querySelector('.card-container').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.card-container').children[0].children[0].innerHTML).toBe('mydesc');
  });
});
