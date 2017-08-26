import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  tabsBadges = [
        {
            name: "Pendientes",
            content: "listado de pendientes",
            posicion: "1"
        },        
        {
            name: "Historico",
            content: "listado de Historico",
            posicion: "4"
        },        
        {
            name: "Reportes",
            direccion: "lalalaal",
            posicion: "2"
        },
        {
            name: "Reportes",
            content: "listado de Reportes",
            posicion: "3"
        }
    ]


    heroes = [
		{
				name: "Aragon",
				weapon: "Andúril",
				posicion: "1"
		},        
		{
				name: "Luke Skywalker",
				weapon: "Saber laser ",
				posicion: "4"
		},        
		{
				name: "Marty McFly",
				weapon: "Skate board",
				posicion: "2"
		},
		{
				name: "Guybrush Threepwood",
				weapon: "none",
				posicion: "3"
		}
	]
}
