import { Component, OnInit, Renderer2 } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  line1: any;
  line2: any;
  line3: any;
  where: any;
  checkin: any;
  checkout: any;
  mapmaindiv: any;
  who: any;
  searchiconshow = false;
  menuBtnClick = false;
  subusershow = false;
  mapshow = false;
  guestshow = false;
  guests = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  };

  constructor(public homecom: HomeComponent, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.menuBtnClick == false) {
        var aciveclass = document.querySelector('.active');
        this.mapmaindiv.style.background = 'var(--white)';
        aciveclass?.classList.remove('active');
        this.searchiconshow = false;
        this.subusershow = false;
        this.mapshow = false;
        this.guestshow = false;
      } else {
        this.menuBtnClick = false;
      }
    });
  }

  ngOnInit(): void {
    this.mapmaindiv = document.getElementById('mapmaindiv');
    this.where = document.getElementById('wherediv');
    this.checkin = document.getElementById('checkindiv');
    this.checkout = document.getElementById('checkoutdiv');
    this.who = document.getElementById('whodiv');
  }
  showsubnavbar(check: any) {
    this.menuBtnClick = true;
    var aciveclass = document.querySelector('.active');
    const sub = document.getElementById('subnav');
    const navbar = document.getElementById('navbar');
    const test = document.getElementById('test');
    this.mapmaindiv.style.background = 'var(--icon-bacground)';
    this.homecom.off();
    navbar!.style.display = 'none';
    sub!.style.display = 'block';
    test!.style.display = 'block ';
    if (innerWidth < 980) {
      this.searchiconshow = false;
    } else {
      this.searchiconshow = true;
    }
    if (check == 'where') {
      this.where?.classList.add('active');
      this.mapshow = true;
      aciveclass?.classList.remove('active');
    } else if (check == 'week') {
      aciveclass?.classList.remove('active');
      this.checkin?.classList.add('active');
    } else if (check == 'who') {
      aciveclass?.classList.remove('active');
      this.guestshow = true;
      this.who?.classList.add('active');
    }
  }
  over(n: any) {
    this.line1 = document.getElementById('line1');
    this.line2 = document.getElementById('line2');
    this.line3 = document.getElementById('line3');
    if (n == 2) {
      this.line1!.style.display = 'none';
    } else if (n == 3) {
      this.line2!.style.display = 'none';
    } else if (n == 4) {
      this.line3!.style.display = 'none';
    }
  }
  out(n: any) {
    this.line1!.style.display = 'block';
    this.line2!.style.display = 'block';
    this.line3!.style.display = 'block';
  }

  activefun(check: any) {
    this.menuBtnClick = true;
    var aciveclass = document.querySelector('.active');
    this.mapmaindiv.style.background = 'var(--icon-bacground)';
    if (innerWidth < 980) {
      this.searchiconshow = false;
    } else {
      this.searchiconshow = true;
    }
    if (check == 'where') {
      this.where?.classList.add('active');
      this.mapshow = true;
      this.guestshow = false;
      aciveclass?.classList.remove('active');
    } else if (check == 'checkin') {
      if (this.checkin?.classList.contains('active')) {
        aciveclass?.classList.remove('active');
      } else {
        aciveclass?.classList.remove('active');
        this.mapshow = false;
        this.guestshow = false;
        this.checkin?.classList.add('active');
      }
    } else if (check == 'checkout') {
      this.menuBtnClick = true;

      if (this.checkout?.classList.contains('active')) {
        aciveclass?.classList.remove('active');
      } else {
        aciveclass?.classList.remove('active');
        this.mapshow = false;
        this.guestshow = false;
        this.checkout?.classList.add('active');
      }
    } else if (check == 'who') {
      if (this.who?.classList.contains('active')) {
        aciveclass?.classList.remove('active');
      } else {
        aciveclass?.classList.remove('active');
        this.mapshow = false;
        this.guestshow = true;
        this.who?.classList.add('active');
      }
    }
  }
  restfun() {
    this.menuBtnClick = true;
    const sub = document.getElementById('subnav');
    const navbar = document.getElementById('navbar');
    const test = document.getElementById('test');
    navbar!.style.display = 'block';
    sub!.style.display = 'none';
    test!.style.display = 'none ';
  }
  showsubuser() {
    this.menuBtnClick = true;
    this.subusershow = true;
    var aciveclass = document.querySelector('.active');
    this.mapmaindiv.style.background = 'var(--white)';
    aciveclass?.classList.remove('active');
    this.searchiconshow = false;
  }
  addadults() {
    if (this.guests.adults == 0) {
      this.guests.adults = 1;
    }
  }
}
