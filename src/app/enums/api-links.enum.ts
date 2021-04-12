export enum ApiLinksEnum {
  LIVE_DATA = 'https://infocovid-back.herokuapp.com/api/getLiveData',
  NEWS = 'https://infocovid-back.herokuapp.com/api/news/general',
  NEWS_VACC = 'https://infocovid-back.herokuapp.com/api/news/vaccins',
  VAC_CENTRES = 'https://infocovid-back.herokuapp.com/api/vaccins/centres',
  SUBSCRIBE = 'https://infocovid-back.herokuapp.com/api/subscribe',
  METRICS = 'https://infocovid-back.herokuapp.com/api/metrics',
  METRICS_RANGE = 'https://infocovid-back.herokuapp.com/api/metrics/range',
  CAS_DEPARTEMENT = 'https://infocovid-back.herokuapp.com/api/metrics/departments',
  PREVISION_CONFINEMENT = 'https://infocovid-back.herokuapp.com/api/previsions/confinement',
  PREVISION_IMMUNITE = 'https://infocovid-back.herokuapp.com/api/previsions/immunite'
}

// tslint:disable-next-line:no-namespace
export namespace ApiLinksEnum {
  export function insertParam(path: ApiLinksEnum, param: string, index: number): string {
    return(path.replace('$' + index, param));
  }
}
