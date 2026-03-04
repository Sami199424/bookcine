import { NextResponse } from "next/server";
import pdfParse from "pdf-parse";

export async function POST(req: Request) {

  const form = await req.formData();
  const file = form.get("file") as File;

  if(!file){
    return NextResponse.json({error:"No file"});
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const data = await pdfParse(buffer);

  return NextResponse.json({
    textPreview: data.text.substring(0,500)
  });

}
