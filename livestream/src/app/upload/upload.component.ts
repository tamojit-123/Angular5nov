import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  onSubmit(videoForm: any) {
    alert("Hurray! video added successfully");
  }

  countryList: Country[] = [
    new Country("1", "India"),
    new Country("2", "USA"),
    new Country("3", "UK"),
  ];

  licenseList: License[] = [
    new License("1", "Standard Viewtube License"),
    new License("2", "Creative Common License")
  ];

  distributionList: Distribution[] = [
    new Distribution("1", "Everywhere"),
    new Distribution("2", "Make this video available only on monetized platforms")
  ];

  videoList: Video[] = [
    new Video("1", "Film & Animation"),
    new Video("2", "Autos & Vehicles"),
    new Video("3", "Music"),
    new Video("4", "Pets & Animals"),
    new Video("5", "Sports"),
    new Video("6", "Travel & Events"),
    new Video("7", "Gaming"),
    new Video("8", "People & Blogs"),
    new Video("9", "Comedy"),
    new Video("10", "Entertainment"),
    new Video("11", "News & Politics"),
    new Video("12", "Howto & Style"),
    new Video("13", "Education"),
    new Video("14", "Science & Technology"),
    new Video("15", "Nonprofits & Activism")
  ];
}

export class Country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

}

export class License {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class Distribution {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class Video {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
