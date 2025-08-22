export type Country = 'USA' | 'England' | 'Europe' | 'Australia' | 'Russia';
export type InsuranceType = 'car' | 'home' | 'health' | 'travel' | 'life' | 'business';
export type Language = 'en' | 'fr' | 'de' | 'ru' | 'ch';

export interface InsuranceCalculation {
  type: InsuranceType;
  country: Country;
  monthlyCost: number;
  yearlyCost: number;
  breakdown: {
    baseRate: number;
    factors: Record<string, number>;
  };
  currency: string;
}

export interface CalculationFormData {
  insuranceType: InsuranceType;
  country: Country;
  age: number;
  value: number;
  location: string;
  coverage: string;
  additionalFactors: Record<string, any>;
}

export interface InsuranceFactors {
  ageFactor: number;
  valueFactor: number;
  locationFactor: number;
  coverageFactor: number;
  riskIndex: number;
}

export interface CountryConfig {
  name: string;
  currency: string;
  baseRates: Record<InsuranceType, number>;
  factors: Record<InsuranceType, InsuranceFactors>;
}

export interface LanguageConfig {
  name: string;
  flag: string;
  nativeName: string;
}
