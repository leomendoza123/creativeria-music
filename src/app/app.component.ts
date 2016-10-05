import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'; 
  af: AngularFire; 
  list:  string; 

  items: FirebaseListObservable<any[]>;
  reverse: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
  	this.af = af; 
  	this.list= "Songs"; 
    this.items = af.database.list(this.list, 
    {query:{orderByChild: 'played'}});

  }

  play(key: string, currentPlayed) {
	  var playedTimes = currentPlayed-1; 
	  this.items.update(key, { played: playedTimes });


  }

  changeList(list:string){
  	this.list = list;
  	this.items = this.af.database.list(this.list,
  	{query:{orderByChild: 'played'}}
  	);
  }



}
