import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeInfoService {

  private videos = [
    {title: 'Xamarin - Servicios de dependencias', author: 'Josico', desc: 'bla'},
    {title: 'Servicios background en Android', author: 'David Velasco', desc: 'bla'},
    {title: 'App inventor - Aprende a programar', author: 'Noelia & Toledo', desc: 'bla'},
    {title: 'API REST con Node JS + Express', author: 'Siro', desc: 'bla'},
  ]
  constructor() { }

  public getSolidgearVideos() {
    return this.videos;
  }
}
