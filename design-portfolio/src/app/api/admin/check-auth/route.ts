import { NextResponse } from 'next/server';
import { getSession } from '../../../../utils/auth';

export async function GET() {
  try {
    const session = await getSession();
    
    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    return NextResponse.json({ authenticated: true });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { message: 'An error occurred during authentication check' },
      { status: 500 }
    );
  }
} 