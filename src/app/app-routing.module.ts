import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbphComponent } from './addbph/addbph.component';
import { BphfinderComponent } from './bphfinder/bphfinder.component';
import { ChemistlocatorComponent } from './chemistlocator/chemistlocator.component';
import { HomeComponent } from './home/home.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { TestbphComponent } from './testbph/testbph.component';
import { WashroomfinderComponent } from './washroomfinder/washroomfinder.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test-your-bph', component: TestbphComponent},
  {path: 'washroomfinder', component: WashroomfinderComponent},
  {path: 'bphfinder/:doctorname', component: BphfinderComponent},
  {path: 'addbph', component: AddbphComponent},
  {path: 'chemist-locator', component: ChemistlocatorComponent},
  {path: 'share/:text', component: ImagecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
