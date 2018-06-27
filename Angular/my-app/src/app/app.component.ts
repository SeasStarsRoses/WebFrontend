import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hello = 'Hello';
  primeNumbers = '';
  maxLength = 8;
  currenttime: Date = new Date(); 
  list: number[] = []; 
  test(){ 
    console.log('hello')
  }
  refresh(){ 
    location.reload(false);
  }
  public isPrimeNumber(candidate: number): boolean {
    for (let i = 2; i < candidate; i++) {
      if (candidate % i === 0) {
        return false;
      }
    } return true;
  }
  public calculatePrimeNumbers() {
    this.primeNumbers = '';
    for (let i = 1; i <= 100; i++) {
      const result = this.isPrimeNumber(i);
      if (i !== 1 && result === true) {
        this.primeNumbers = this.primeNumbers + i + ' ';
        console.log(i);
        this.list.push(i);
      }
    }
  }
}
