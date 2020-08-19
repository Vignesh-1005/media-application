import { Component, OnInit } from '@angular/core';
import { EndangeredSpeciesService } from '../../services/endangered-species.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  products: any[];

  constructor(private dataService: EndangeredSpeciesService) { }

  ngOnInit(): void {
    this.dataService.getSpeciesDetails().subscribe(response => {
      console.log('DataZ', response);
      this.products = response.data;
    });
  }

}
