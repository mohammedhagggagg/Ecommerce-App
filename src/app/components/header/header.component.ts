import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

// import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true, // ✅ ضروري إذا كنت تستخدم `imports`
//   imports: [RouterLink, RouterLinkActive],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css'] // ✅ التصحيح هنا
// })
// export class HeaderComponent { }

