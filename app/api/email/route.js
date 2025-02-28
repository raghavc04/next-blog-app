import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/emailModel";
import { NextResponse } from "next/server";


const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();
export async function POST(request){
    const formData = await request.formData();
    const emailData = {
        email: `${formData.get('email')}`,
       
    }
    await EmailModel.create(emailData);
    // Use the form data here
    return NextResponse.json({success: true, message: "Email Subscribe successfully"});
}

export async function GET(request) {
  const emails = await EmailModel.find({});
  return NextResponse.json({emails})
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success: true, message: "Email deleted successfully"});
}