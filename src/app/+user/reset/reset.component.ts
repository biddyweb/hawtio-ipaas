import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Logger} from '../../log.service';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

Logger.get('Reset').debug('`Reset` component loaded asynchronously');

@Component({
    selector: 'reset',
    styles: [`
  `],
    template: `
    <h1>Reset</h1>
    <div>
      Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.
    </div>
    <div>
      <h3>
        Malesuada Fringilla
      </h3>
    </div>
    <pre>this.localState = {{ localState | json }}</pre>
  `
})
export class Reset {
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
        
        console.log('hello `Reset` component');
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
