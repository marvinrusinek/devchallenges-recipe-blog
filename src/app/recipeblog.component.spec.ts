import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipeblogComponent } from './recipeblog.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RecipeblogComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RecipeblogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'recipe-page-master'`, () => {
    const fixture = TestBed.createComponent(RecipeblogComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('recipe-page-master');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RecipeblogComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('recipe-page-master app is running!');
  });
});
