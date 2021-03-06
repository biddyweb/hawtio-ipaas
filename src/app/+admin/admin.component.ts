import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Logger} from '../log.service';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

Logger.get('Admin').debug('`Admin` component loaded asynchronously');

@Component({
    selector: 'admin',
    styles: [`
  `],
    template: `
    <h1>Admin</h1>
    <div>
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    </div>
    <div>
      <h3>
        Euismod
      </h3>
    </div>
    <pre>this.localState = {{ localState | json }}</pre>
  `
})
export class Admin {
    localState;
    
    constructor(public route: ActivatedRoute) {
        
    }
    
    ngOnInit() {
        this.route
          .data
          .subscribe((data: any) => {
              // your resolved data from route
              this.localState = data.yourData;
          });
        
        console.log('hello `Admin` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        // this.asyncDataWithWebpack();
    }
    
    asyncDataWithWebpack() {
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
        // setTimeout(() => {
        //
        //   let asyncDataPromise = asyncMockDataPromiseFactory();
        //   asyncDataPromise.then(json => {
        //     console.log('async mockData', json);
        //   });
        //
        // });
    }
    
}
