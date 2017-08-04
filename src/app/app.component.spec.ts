import { TestBed, async } from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {CardComponent} from "./card/card.component";
import {YoutubeInfoService} from "./youtube-info.service";
import {ColorizerService} from "./colorizer.service";

class MockYoutubeInfoService {
  public getSolidgearVideos() {
    return [{title: 'testtitle', author: 'testauthor', url: 'testurl', desc: 'testdesc'}];
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent
      ],
      providers: [
        {provide: YoutubeInfoService, useClass: MockYoutubeInfoService },
        ColorizerService
      ],
      imports: [
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'JS CORNER APP'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('JS CORNER APP');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('JS CORNER APP');
  }));

  it ('click open random video launches the url', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(window, 'open');
    fixture.nativeElement.querySelector('#openVideoButton').click();
    expect(window.open).toHaveBeenCalledWith('testurl', '_blank');
  }))
});
