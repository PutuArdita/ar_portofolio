import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 },
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Web3Forms access key is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Contact service is not configured.",
        },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `New message from ${name} - Portfolio`,
        replyto: email,
      }),
    });

    const responseText = await response.text();
    let result;

    try {
      result = JSON.parse(responseText);
    } catch {
      console.error("Web3Forms returned a non-JSON response:", {
        status: response.status,
        contentType: response.headers.get("content-type"),
      });

      return NextResponse.json(
        {
          success: false,
          message:
            "The email service is temporarily unavailable. Please try again later.",
        },
        { status: 502 },
      );
    }

    if (!response.ok || !result.success) {
      console.error("Web3Forms Error:", result);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send message.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
