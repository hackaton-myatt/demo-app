import { AfterContentInit, Component, ViewChild } from "@angular/core";
declare var google;

@Component({
    selector: 'app-race',
    templateUrl: 'race.component.html',
    styleUrls: ['race.component.scss']
})

export class RaceComponent implements AfterContentInit{
    public map:any;
    @ViewChild('map') mapElement:any;
    constructor() {}

    ngAfterContentInit(){
        console.log(this.mapElement);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
    }
}

function viewChild(arg0: string) {
    throw new Error("Function not implemented.");
}
