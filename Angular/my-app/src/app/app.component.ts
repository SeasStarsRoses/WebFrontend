import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  hello = 'Hello';
  primeNumbers = '';
  maxLength = 8;
  currenttime: Date = new Date();
  public reloadPage() {
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
      }
    }
  }
}
