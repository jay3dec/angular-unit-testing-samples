import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { DataServiceService } from './data-service.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call saveData', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, "calculate").and.returnValue(1000);
    spyOn(app,"saveConfigLocally").and.stub();
    let service = fixture.debugElement.injector.get(DataServiceService);
    spyOn(service,"saveConfigData").and.callFake(() => {
      return of({
        "statusCode" : 200
      });
    })
    app.saveData();
    expect(app.data).toEqual({
      "statusCode" : 200
    });

  })


  
});
