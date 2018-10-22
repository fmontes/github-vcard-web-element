import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubVcardComponent } from './github-vcard.component';

describe('GithubVcardComponent', () => {
  let component: GithubVcardComponent;
  let fixture: ComponentFixture<GithubVcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubVcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubVcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
