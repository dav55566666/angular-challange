import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig, AppModule } from './app/app-module';

bootstrapApplication(AppModule, appConfig)
  .catch((err) => console.error(err));
