import { Component, signal } from '@angular/core';

interface MenuItem {
	title: string;
	route: string;
}

@Component({
	selector: 'side-menu',
  templateUrl: './side-menu-component.component.html',
  styleUrl: './side-menu-component.component.css'
})
export class SideMenuComponentComponent {

	public menuItems = signal<MenuItem[]>([
		{title: 'Contador', route: 'counter'},
		{title: 'Usuario', route: 'user-info'},
		{title: 'Mutaciones', route: 'properties'},
	]);

	// public menuItems: MenuIntem[] = [
		// {title: 'Contador', router: 'counter'},
		// {title: 'Usuario', router: 'user-info'},
		// {title: 'Mutaciones', router: 'properties'},
	// ]

}
