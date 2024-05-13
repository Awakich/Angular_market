import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router'
import { Good } from '../../../interfaces/good';


@Component({
  selector: 'app-good',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './good.component.html',
  styleUrl: './good.component.scss'
})
export class GoodComponent {
  @Input() good!: Good;
  @Output() inFavoriteChange = new EventEmitter<boolean>();

  constructor() { }

  onChangeFavorite() {
    this.inFavoriteChange.emit(!this.good.inFavorite);
  }
}
