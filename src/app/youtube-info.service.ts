import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeInfoService {

  private videos = [
    {title: 'Xamarin - Servicios de dependencias', author: 'Josico', url: 'https://youtu.be/mnX2JXO3mPU', desc: 'En este vídeo vamos a ver como hacer nuestra primera aplicación multiplataforma con Xamarin. Vamos a seguir los pasos desde la creación del proyecto hasta tener algo funcional.'},
    {title: 'Servicios background en Android', author: 'David Velasco', url: 'https://youtu.be/WkCsUKBsLsA', desc: 'Los Servicios en Android (Android Services) son componentes esenciales de las aplicaciones Android, que nos van a permitir ejecutar operaciones de larga duración en background (o segundo plano)  sin necesidad de tener la interfaz de usuario de la aplicación activa.'},
    {title: 'App inventor - Aprende a programar', author: 'Noelia & Toledo', url: 'https://youtu.be/BbGKxT0pZTA', desc: 'App Inventor es un lenguaje visual y por bloques para hacer aplicaciones Android. Está destinado principalmente a personas que se están iniciando en el mundo de la programación.'},
    {title: 'API REST con Node JS + Express', author: 'Siro', url:'https://youtu.be/XW6o-lOwKW0', desc: 'NodeJS (https://nodejs.org/es/) es un entorno de ejecución de código Javascript, que nos permite programar nuestro propio servidor al que conectar diferentes aplicaciones móviles o clientes web.'},
  ]
  constructor() { }

  public getSolidgearVideos() {
    return this.videos;
  }
}
