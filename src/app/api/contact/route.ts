import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
      '';
    const formspreeId = process.env.FORMSPREE_FORM_ID || '';

    // 1. Submit via Web3Forms
    if (accessKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          from_name: `${name} (Portfolio Contact)`,
          subject: `New Message from ${name} - Pramod Ravisanka Portfolio`,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        return NextResponse.json({
          success: true,
          message: 'Message delivered successfully!',
        });
      }
      return NextResponse.json(
        {
          success: false,
          message: data.message || 'Failed to send message via Web3Forms.',
        },
        { status: 502 }
      );
    }

    // 2. Submit via Formspree if configured
    if (formspreeId) {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Message from ${name} - Pramod Ravisanka Portfolio`,
        }),
      });

      if (response.ok) {
        return NextResponse.json({
          success: true,
          message: 'Message delivered successfully!',
        });
      }
      return NextResponse.json(
        { success: false, message: 'Failed to send message via Formspree.' },
        { status: 502 }
      );
    }

    // 3. Fallback when service key is pending configuration
    return NextResponse.json(
      {
        success: false,
        requiresKey: true,
        message: 'WEB3FORMS_ACCESS_KEY environment variable is not configured yet.',
      },
      { status: 501 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Internal server error while sending email.',
      },
      { status: 500 }
    );
  }
}
