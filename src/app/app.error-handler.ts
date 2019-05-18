import {ErrorHandler, Injectable, Injector} from '@angular/core'
import {HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import {NotificationService} from './shared/messages/notification.service'
import {LoginService} from './security/login/login.service'
@Injectable()
export class ApplicationErrorHandle extends ErrorHandler {

  constructor(private injector: Injector, private ns: NotificationService){
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      const message = errorResponse.error.message

      switch(errorResponse.status){
        case 401:
          this.injector.get(LoginService).handleLogin();
          break;
        case 403:
          this.ns.notify(message || 'Não autorizado.')
          break;
        case 404:
          console.log('404/ ApplicationErrorHandle')
          this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes')
          break;
      }
    }
  }
}
