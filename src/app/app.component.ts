import {Component} from '@angular/core';
import {ColDef} from 'ag-grid-community';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Column Definitions.
 public columnDefs: ColDef[] = [
   { field: 'RepositoryName'},
   { field: 'Description',width:810},
   { field: 'ProgrammingLanguage' },
   { field: 'NumberOfStargazers' },
   { field: 'RepoURL', width:350 }
 ];
 // Data that gets displayed in the grid
  rowData=[
  { RepositoryName: 'californium', Description: 'Eclipse Californium is a Java implementation of RFC7252 - Constrained Application Protocol for IoT Cloud services.',ProgrammingLanguage:'Java',NumberOfStargazers:2,RepoURL:'https://github.com/bosch-io/californium'},
  { RepositoryName: 'oss-review-toolkit', Description: 'A suite of tools to assist with reviewing Open Source Software dependencies.', ProgrammingLanguage:'Kotlin',NumberOfStargazers:6,RepoURL:'https://github.com/bosch-io/oss-review-toolkit' },
  { RepositoryName: 'hono', Description: 'Eclipse Hono provides uniform (remote) service interfaces for connecting large numbers of IoT devices to a (cloud) back end.',ProgrammingLanguage:'Java',NumberOfStargazers:7,RepoURL:'https://github.com/bosch-io/hono' },
  { RepositoryName: 'keycloak', Description: 'Open Source Identity and Access Management For Modern Applications and Services.', ProgrammingLanguage:'Java',NumberOfStargazers:0,RepoURL:'https://github.com/bosch-io/keycloak' },
  { RepositoryName: 'ditto', Description: 'Eclipse Ditto™ is a technology in the IoT implementing a software pattern called “digital twins”.', ProgrammingLanguage:'Java',NumberOfStargazers:11,RepoURL:'https://github.com/bosch-io/ditto' }]
  ;
}