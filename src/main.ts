import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// platformBrowserDynamic is a module responsible for
// loading the angular application in the desktop's browser

// angular app can be bootstrapped in many ways and platforms
// we can load the app from mobile devices by ionic or native script --> platformNativeDynamic

// since we are using browser, platformBrowserDynamic

import { AppModule } from './app/app.module';




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
