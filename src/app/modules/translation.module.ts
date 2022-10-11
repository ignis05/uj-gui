import { NgModule } from '@angular/core'

import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http'

const config: TranslateModuleConfig = {
  defaultLanguage:'en',
  
	loader: {
		provide: TranslateLoader,
		useFactory: httpTranslateLoader,
		deps: [HttpClient],
	},
}

@NgModule({
	declarations: [],
	imports: [TranslateModule.forRoot(config)],
	exports: [TranslateModule],
})
export class TranslationModule {}

export function httpTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http,'assets/i18n/')
}
