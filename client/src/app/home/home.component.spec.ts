import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

describe('Home', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, HomeComponent, RouterModule.forRoot([])],
    });

    fixture = TestBed.createComponent(HomeComponent);

    component = fixture.componentInstance; // BannerComponent test instance

    // query for the link (<a> tag) by CSS element selector
    de = fixture.debugElement.query(By.css('.game-title'));
    el = de.nativeElement;
  });

  it('It loads each element (e.g., buttons, title)', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('Game');
    expect(el.textContent).toContain('Host Game');
    expect(el.textContent).toContain('Join Game');
    expect(component).toBeTruthy();
  });

});
