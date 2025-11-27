<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use RickDBCN\FilamentEmail\Models\Email;

class EmailController extends Controller
{
    public function store(Request $request){
        // requiest validation
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'subject' => 'required',
            'message' => 'required'
        ]);

        // store the email
        $email = Email::create([
            'name' => $validated['name'],
            'from' => $validated['email'],
            'subject' => $validated['subject'],
            'phone' => $validated['phone'],
            'text_body' => $validated['message'],
            'html_body' => $validated['message'],
        ]);

        return response('email was sent with success', 200)->header('Content-Type', 'text/plain');
    }
}
