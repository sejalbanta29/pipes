import { OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'count'})
export class CountVowel implements PipeTransform, OnInit {
    
    valueArray: string[] = [];
    count_a = 0;
    count_e = 0;
    count_i = 0;
    count_o = 0;
    count_u = 0;
    answerString: string;

    ngOnInit() {}
    
    transform(value: string): string {
        // this.valueArray = value.split('');
        console.log(value);
        for(let element of value){
            console.log(value)
            if(element == "a" || element == "A"){
                this.count_a++;
            }else if (element === 'e' || element === 'E') {
                this.count_e++;
            }else if (element === 'i' || element === 'I') {
                this.count_i++;
            }else if (element === 'o' || element === 'O') {
                this.count_o++;
            }else if (element === 'u' || element === 'U') {
                this.count_u++;
            }
        }
        this.answerString = ` The string contains - a:${this.count_a}, e:${this.count_e}, i:${this.count_i}, o:${this.count_o}, u:${this.count_u}`;
        return value +":" +this.answerString;
    }
}