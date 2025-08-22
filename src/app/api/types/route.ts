import { NextResponse } from 'next/server';
import { getAllInsuranceTypes } from '@/lib/insuranceCalculator';

export async function GET() {
  try {
    const types = getAllInsuranceTypes();
    
    const typeData = types.map(type => ({
      code: type,
      name: type.charAt(0).toUpperCase() + type.slice(1) + ' Insurance',
      description: `Insurance coverage for ${type}`
    }));

    return NextResponse.json({
      success: true,
      data: typeData,
      count: types.length
    });

  } catch (error) {
    console.error('Types API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
