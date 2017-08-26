import {  Component,  Input} from '@angular/core';
import {  trigger,  state,  style,  animate,  transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
	  	trigger('myTrigger', [ 
	  		
	  		state('fadeIn', 
	  			style({
	        		opacity: '1',
	        		transform: 'translateY(0px)'
	      		})
	  		),
//			void : transcicion de elementos nuevos 
//			tiempo: 0.5s 500ms 500
//			Espera: se agrega otro intervalo de tiempo al lado ej: 500 500
			transition('void => *', [
					style({
						opacity: '0',
						transform: 'translateY(20px)'
					}),
					animate('200ms 500ms  ease-in-out')
				]
			)
	    ])

	    
	],



})
export class TestComponent{

  @Input() heroes:any
	state = "small"

	addItem(){
		this.heroes.push(
			{
				name: "New Hero",
				weapon: "weapon",
				posicion: "num"
			}
		)
		this.state = "fadeIn"
	}


	

}
