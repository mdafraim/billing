// /*
//  * Copyright (C) 2019 IHS Markit.
//  * All Rights Reserved
//  */
// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
// import { Observable, of } from "rxjs";
// import { catchError, map, retry } from "rxjs/operators";
// const httpOptions = {
//   headers: new HttpHeaders({ "Content-Type": "application/json" }),
// };

// @Injectable({
//   providedIn: "root",
// })
// export class AppService {


//   constructor(private http: HttpClient) {}





// //   //get metadata service
// //   public getMetadata() {
// //     let fullPath = this.getApiUrl("getMetadata");
// //     return this.http
// //       .get(fullPath)
// //       .pipe(
// //         retry(1),
// //         catchError(
// //           this.handleError(this.msgConstants.sourcing.labels.errorMessage, [])
// //         )
// //       );
// //   }

//   //post service for add new, edit, reset and delete record
//   public postService(data:any) {
//     return this.http
//       .post('http://localhost:3000/api/genres', data)
//       .pipe(
//         retry(1),
//         catchError(
//           this.handleError('',[])
//         )
//       );
//   }


//   /* *********** Error Handling ********** */

//   /**
//    * @handleError Handle Http operation that failed. Let the app continue.	 *
//    * @param operation name of the operation that failed
//    * @param result optional value to return as the observable result
//    */
//   public handleError<T>(result?: any) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//       return of(result);
//     };
//   }

//   /** Log a Service message with the MessageService */
//   public log(message: string) {
//     console.log(message);
//   }

//   // Method to get env specific api url
// //   public getApiUrl(forApi: string) {
// //     let path = window.location.hostname;
// //     let apiBaseUrl = "";
// //     let appUrls = this.msgConstants.unityportal.app_urls.web;
// //     let apiUrls = this.msgConstants.unityportal.app_urls[forApi];
// //     apiBaseUrl = this.mapValue(path, appUrls, apiUrls);
// //     return apiBaseUrl;
// //   }


// }
