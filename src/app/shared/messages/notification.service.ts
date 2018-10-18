import {EventEmitter} from '@angular/core'

export class NotificationService {

  notifier = new EventEmitter<string>()

  notify(message: string){
    console.log(`Mensagem Notificarion "${message}"`)
    this.notifier.emit(message)
  }
}
