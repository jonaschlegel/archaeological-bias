import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(
  req: NextRequest,
): Promise<NextResponse<{ message: string }>> {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 },
      );
    }

    console.log('Form Submission:', { name, email, message });

    // TODO: Integrate email sending logic (e.g., Nodemailer, SendGrid, Resend)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
