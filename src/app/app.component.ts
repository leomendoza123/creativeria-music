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

  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
  	this.af = af; 
    this.items = af.database.list('Songs');
 
  }

  gotoDetail(key: string, currentPlayed) {
	  var playedTimes = currentPlayed+1; 
	  this.items.update(key, { played: playedTimes });
	  console.log(key);
	  console.log(playedTimes);


  }


}
