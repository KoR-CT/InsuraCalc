import { NextRequest, NextResponse } from 'next/server';
import { calculateInsurance } from '@/lib/insuranceCalculator';
import { CalculationFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: CalculationFormData = await request.json();
    
    // Validate required fields
    const requiredFields = ['insuranceType', 'country', 'age', 'value', 'location', 'coverage'];
    for (const field of requiredFields) {
      if (!body[field as keyof CalculationFormData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate age range
    if (body.age < 18 || body.age > 80) {
      return NextResponse.json(
        { error: 'Age must be between 18 and 80' },
        { status: 400 }
      );
    }

    // Validate value
    if (body.value < 1000) {
      return NextResponse.json(
        { error: 'Value must be at least 1000' },
        { status: 400 }
      );
    }

    // Calculate insurance
    const result = calculateInsurance(body);

    return NextResponse.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Calculation API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'InsuraCalc API',
    version: '1.0.0',
    endpoints: {
      calculate: 'POST /api/calculate',
      countries: 'GET /api/countries',
      types: 'GET /api/types'
    }
  });
}


