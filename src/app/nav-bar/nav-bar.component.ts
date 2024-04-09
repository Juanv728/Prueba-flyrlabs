import { Component,Renderer2,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.sass'
})

export class NavBarComponent {
  @ViewChild('navResponsive') btnRes!: ElementRef;
  @ViewChild('menu') menuRes!: ElementRef;
  @ViewChild('menuImg') menuImg!: ElementRef;
  @ViewChild('subMenu') subMenu!: ElementRef;

  constructor(private renderer2: Renderer2){}

  cambio(): void{
    const menu = this.menuRes.nativeElement;
    const img = this.menuImg.nativeElement;

    if(click){
      this.renderer2.addClass(menu,'mostrar');
      this.renderer2.setAttribute(img,'src','../../assets/responsive-menu-close.png');
      click = false
    }else{
      this.renderer2.removeClass(menu,'mostrar');
      this.renderer2.setAttribute(img,'src','../../assets/responsive-menu-open.png');
      click = true
    }
  }

  mostrarMenu(): void{
    const sub = this.subMenu.nativeElement;

    if(subBtn){
      this.renderer2.addClass(sub,'mostrar');
      subBtn = false
    }else{
      this.renderer2.removeClass(sub,'mostrar');
      subBtn = true
    }
  }
}

let click= true
let subBtn= true