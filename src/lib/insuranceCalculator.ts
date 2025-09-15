import { Country, InsuranceType, InsuranceCalculation, CalculationFormData, CountryConfig } from '@/types';

// Country configurations with base rates and factors
const countryConfigs: Record<Country, CountryConfig> = {
  USA: {
    name: 'United States',
    currency: 'USD',
    baseRates: {
      car: 120,
      home: 80,
      health: 200,
      travel: 50,
      life: 150,
      business: 300
    },
    factors: {
      car: { ageFactor: 0.8, valueFactor: 0.02, locationFactor: 1.2, coverageFactor: 1.5, riskIndex: 1.1 },
      home: { ageFactor: 0.9, valueFactor: 0.015, locationFactor: 1.3, coverageFactor: 1.4, riskIndex: 1.0 },
      health: { ageFactor: 1.1, valueFactor: 0.01, locationFactor: 1.1, coverageFactor: 1.6, riskIndex: 1.2 },
      travel: { ageFactor: 0.7, valueFactor: 0.005, locationFactor: 1.4, coverageFactor: 1.3, riskIndex: 0.9 },
      life: { ageFactor: 1.3, valueFactor: 0.008, locationFactor: 1.0, coverageFactor: 1.7, riskIndex: 1.4 },
      business: { ageFactor: 1.0, valueFactor: 0.025, locationFactor: 1.5, coverageFactor: 1.8, riskIndex: 1.3 }
    }
  },
  England: {
    name: 'England',
    currency: 'GBP',
    baseRates: {
      car: 100,
      home: 70,
      health: 180,
      travel: 45,
      life: 130,
      business: 280
    },
    factors: {
      car: { ageFactor: 0.85, valueFactor: 0.018, locationFactor: 1.15, coverageFactor: 1.45, riskIndex: 1.05 },
      home: { ageFactor: 0.95, valueFactor: 0.012, locationFactor: 1.25, coverageFactor: 1.35, riskIndex: 0.95 },
      health: { ageFactor: 1.05, valueFactor: 0.009, locationFactor: 1.05, coverageFactor: 1.55, riskIndex: 1.15 },
      travel: { ageFactor: 0.75, valueFactor: 0.004, locationFactor: 1.35, coverageFactor: 1.25, riskIndex: 0.85 },
      life: { ageFactor: 1.25, valueFactor: 0.007, locationFactor: 0.95, coverageFactor: 1.65, riskIndex: 1.35 },
      business: { ageFactor: 0.95, valueFactor: 0.022, locationFactor: 1.45, coverageFactor: 1.75, riskIndex: 1.25 }
    }
  },
  Europe: {
    name: 'Europe',
    currency: 'EUR',
    baseRates: {
      car: 110,
      home: 75,
      health: 190,
      travel: 48,
      life: 140,
      business: 290
    },
    factors: {
      car: { ageFactor: 0.82, valueFactor: 0.019, locationFactor: 1.18, coverageFactor: 1.48, riskIndex: 1.08 },
      home: { ageFactor: 0.92, valueFactor: 0.013, locationFactor: 1.28, coverageFactor: 1.38, riskIndex: 0.98 },
      health: { ageFactor: 1.08, valueFactor: 0.0095, locationFactor: 1.08, coverageFactor: 1.58, riskIndex: 1.18 },
      travel: { ageFactor: 0.72, valueFactor: 0.0045, locationFactor: 1.38, coverageFactor: 1.28, riskIndex: 0.88 },
      life: { ageFactor: 1.28, valueFactor: 0.0075, locationFactor: 0.98, coverageFactor: 1.68, riskIndex: 1.38 },
      business: { ageFactor: 0.98, valueFactor: 0.024, locationFactor: 1.48, coverageFactor: 1.78, riskIndex: 1.28 }
    }
  },
  Australia: {
    name: 'Australia',
    currency: 'AUD',
    baseRates: {
      car: 130,
      home: 85,
      health: 220,
      travel: 55,
      life: 160,
      business: 320
    },
    factors: {
      car: { ageFactor: 0.78, valueFactor: 0.021, locationFactor: 1.22, coverageFactor: 1.52, riskIndex: 1.12 },
      home: { ageFactor: 0.88, valueFactor: 0.016, locationFactor: 1.32, coverageFactor: 1.42, riskIndex: 1.02 },
      health: { ageFactor: 1.12, valueFactor: 0.0105, locationFactor: 1.12, coverageFactor: 1.62, riskIndex: 1.22 },
      travel: { ageFactor: 0.68, valueFactor: 0.0055, locationFactor: 1.42, coverageFactor: 1.32, riskIndex: 0.92 },
      life: { ageFactor: 1.32, valueFactor: 0.0085, locationFactor: 1.02, coverageFactor: 1.72, riskIndex: 1.42 },
      business: { ageFactor: 1.02, valueFactor: 0.026, locationFactor: 1.52, coverageFactor: 1.82, riskIndex: 1.32 }
    }
  },
  Russia: {
    name: 'Russia',
    currency: 'RUB',
    baseRates: {
      car: 8000,
      home: 6000,
      health: 15000,
      travel: 3000,
      life: 12000,
      business: 25000
    },
    factors: {
      car: { ageFactor: 0.75, valueFactor: 0.025, locationFactor: 1.25, coverageFactor: 1.55, riskIndex: 1.15 },
      home: { ageFactor: 0.85, valueFactor: 0.018, locationFactor: 1.35, coverageFactor: 1.45, riskIndex: 1.05 },
      health: { ageFactor: 1.15, valueFactor: 0.012, locationFactor: 1.15, coverageFactor: 1.65, riskIndex: 1.25 },
      travel: { ageFactor: 0.65, valueFactor: 0.006, locationFactor: 1.45, coverageFactor: 1.35, riskIndex: 0.95 },
      life: { ageFactor: 1.35, valueFactor: 0.009, locationFactor: 1.05, coverageFactor: 1.75, riskIndex: 1.45 },
      business: { ageFactor: 1.05, valueFactor: 0.028, locationFactor: 1.55, coverageFactor: 1.85, riskIndex: 1.35 }
    }
  }
};

// Coverage level multipliers
const coverageMultipliers = {
  basic: 0.8,
  standard: 1.0,
  premium: 1.3,
  comprehensive: 1.6
};

export function calculateInsurance(data: CalculationFormData): InsuranceCalculation {
  const config = countryConfigs[data.country];
  const factors = config.factors[data.insuranceType];
  const baseRate = config.baseRates[data.insuranceType];
  
  // Calculate age factor (normalized to 25-65 range)
  const normalizedAge = Math.max(18, Math.min(80, data.age));
  const ageMultiplier = factors.ageFactor * (normalizedAge / 40);
  
  // Calculate value factor (normalized to reasonable range)
  const normalizedValue = Math.max(1000, Math.min(1000000, data.value));
  const valueMultiplier = 1 + (factors.valueFactor * (normalizedValue / 10000));
  
  // Location factor (simplified)
  const locationMultiplier = factors.locationFactor;
  
  // Coverage factor
  const coverageMultiplier = coverageMultipliers[data.coverage as keyof typeof coverageMultipliers] || 1.0;
  
  // Calculate monthly cost
  const monthlyCost = baseRate * 
    ageMultiplier * 
    valueMultiplier * 
    locationMultiplier * 
    coverageMultiplier * 
    factors.riskIndex;
  
  // Calculate yearly cost
  const yearlyCost = monthlyCost * 12;
  
  return {
    type: data.insuranceType,
    country: data.country,
    monthlyCost: Math.round(monthlyCost * 100) / 100,
    yearlyCost: Math.round(yearlyCost * 100) / 100,
    breakdown: {
      baseRate,
      factors: {
        ageFactor: ageMultiplier,
        valueFactor: valueMultiplier,
        locationFactor: locationMultiplier,
        coverageFactor: coverageMultiplier,
        riskIndex: factors.riskIndex
      }
    },
    currency: config.currency
  };
}

export function getCountryConfig(country: Country): CountryConfig {
  return countryConfigs[country];
}

export function getAllCountries(): Country[] {
  return Object.keys(countryConfigs) as Country[];
}

export function getAllInsuranceTypes(): InsuranceType[] {
  return ['car', 'home', 'health', 'travel', 'life', 'business'];
}


