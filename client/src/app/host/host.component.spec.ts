import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { HostComponent } from './host.component';

describe('Host', () => {

  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, HostComponent],
    });

    fixture = TestBed.createComponent(HostComponent);

    component = fixture.componentInstance; // BannerComponent test instance

    // query for the link (<a> tag) by CSS element selector
    de = fixture.debugElement.query(By.css('.host-card'));
    el = de.nativeElement;
  });

  it('It has the basic Host page text', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('This is a placeholder for the host page!');
    expect(component).toBeTruthy();
  });

});
