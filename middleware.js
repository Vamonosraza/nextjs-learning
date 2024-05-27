import { NextResponse } from "next/server"

// This is a middleware function that will redirect the user to the home page if they try to access the about page. The purpose of this is to show how middleware can be used to protect routes.
export function middleware(request){
    console.log('middleware')
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    // I can add more paths if I choose to like '/task/:path*'
    matcher: ['/about/:path*',]
}