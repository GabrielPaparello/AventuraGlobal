// app/api/proxy/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  // Validar URL
  if (!url || !url.startsWith("https://randomuser.me")) {
    return NextResponse.json(
      { error: "URL inválida o no permitida" },
      { status: 400 }
    );
  }

  try {
    const imageRes = await fetch(url);

    if (!imageRes.ok) {
      return NextResponse.json(
        { error: "No se pudo obtener la imagen" },
        { status: imageRes.status }
      );
    }

    const contentType = imageRes.headers.get("content-type") || "image/jpeg";
    const arrayBuffer = await imageRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400", // 1 día
      },
    });
  } catch (error) {
    console.error("Error al cargar la imagen:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
