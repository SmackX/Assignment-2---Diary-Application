export class LoggingService {
  // tslint:disable-next-line:typedef
  logStatus( message: string ){
    let currentDateTime = new Date();
    let Time = new Date().toTimeString();
    let currentDateTimeString = currentDateTime.toDateString();
    console.log(` ${Time}  ${currentDateTimeString} : `, message) ;
  }
}
