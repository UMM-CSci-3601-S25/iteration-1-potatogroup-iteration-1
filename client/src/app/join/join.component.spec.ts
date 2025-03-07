import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { JoinComponent } from './join.component';

describe('Join', () => {

  let component: JoinComponent;
  let fixture: ComponentFixture<JoinComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, JoinComponent],
    });

    fixture = TestBed.createComponent(JoinComponent);

    component = fixture.componentInstance; // BannerComponent test instance

    // query for the link (<a> tag) by CSS element selector
    de = fixture.debugElement.query(By.css('.join-card'));
    el = de.nativeElement;
  });

  it('It has the basic Join page text', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('This is a placeholder for the join page!');
    expect(component).toBeTruthy();
  });

});
