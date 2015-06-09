import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, NgIf} from 'angular2/angular2';

@Component({
    selector: 'hello'
})
@View({
	<div>
	</div>

	`,
    directives: [NgIf]
})
export class Hello {
    name: string = 'World';
    constructor() {
        setTimeout(() => {
          this.name = 'NEW World'
        }, 2000);
    }
	
	hideDiv1(){
		return true;
	}	
	
	hideDiv2(){
		return false;
	}
}

bootstrap(Hello);
