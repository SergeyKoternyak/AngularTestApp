import { Component, OnInit } from '@angular/core';
declare let DG: any;


@Component({
    selector: 'map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.less']
})
export class MapComponent implements OnInit {

    markers: any;

    ngOnInit() {
        DG.then(() => {
            let map = DG.map('map', {
                'center': [46.48, 30.74],
                'zoom': 11,
                'fullscreenControl': false
            });

            this.markers = DG.featureGroup();
            // DG.controll.localion.addTo(map);
            map.on('click', this.eventHandler.bind(this));
        })
    }

    eventHandler() {
        console.log('hello')
    }
    
    saveButton = 'Save markers';
    showButton = 'Show markers';

    saveMarkers() {
        console.log('save markers')
    }

    toggleMarkers() {
        console.log('toggle markers')
    }
}