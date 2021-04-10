export enum ApiLinksEnum {
  LIVE_DATA = 'http://infocovid-back.herokuapp.com/api/getLiveData',
  NEWS = 'http://infocovid-back.herokuapp.com/api/news/general',
  NEWS_VACC = 'http://infocovid-back.herokuapp.com/api/news/vaccins',
  VAC_CENTRES = 'http://infocovid-back.herokuapp.com/api/vaccins/centres',
  SUBSCRIBE = 'http://infocovid-back.herokuapp.com/api/subscribe',
  METRICS = 'http://infocovid-back.herokuapp.com/api/metrics',
  METRICS_RANGE = 'http://infocovid-back.herokuapp.com/api/metrics/range',
  CAS_DEPARTEMENT = 'http://infocovid-back.herokuapp.com/api/metrics/departments',
  PREVISION_CONFINEMENT = 'http://infocovid-back.herokuapp.com/api/previsions/confinement',
  PREVISION_IMMUNITE = 'http://infocovid-back.herokuapp.com/api/previsions/immunite'
}

// tslint:disable-next-line:no-namespace
export namespace ApiLinksEnum {
  export function insertParam(path: ApiLinksEnum, param: string, index: number): string {
    return(path.replace('$' + index, param));
  }
}
