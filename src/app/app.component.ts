import { Component } from '@angular/core';
import {YoutubeInfoService} from "./youtube-info.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title = 'JS CORNER APP'
  private videos;

  constructor(
    private youtubeService: YoutubeInfoService
  ) {
  }

  ngOnInit() {
    this.videos = this.youtubeService.getSolidgearVideos().map(function(item) {
      return {title: item.title, extendedInfo: item.desc, footer: item.author}
    })
  }
}
