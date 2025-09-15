import { NextResponse } from 'next/server';
import { getAllCountries, getCountryConfig } from '@/lib/insuranceCalculator';

export async function GET() {
  try {
    const countries = getAllCountries();
    const countryData = countries.map(country => {
      const config = getCountryConfig(country);
      return {
        code: country,
        name: config.name,
        currency: config.currency,
        baseRates: config.baseRates
      };
    });

    return NextResponse.json({
      success: true,
      data: countryData,
      count: countries.length
    });

  } catch (error) {
    console.error('Countries API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


