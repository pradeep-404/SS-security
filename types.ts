export interface ServiceRate {
  type: string;
  rate: string;
  shift: string;
  facility: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum ContactType {
  CLIENT = 'CLIENT',
  CANDIDATE = 'CANDIDATE'
}