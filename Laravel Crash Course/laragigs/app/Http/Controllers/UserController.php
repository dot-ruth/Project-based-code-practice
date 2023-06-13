<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    //
    public function create()
    {
        return view('users.register');
    }

    public function store(Request $request)
    {
        $FormFeilds = $request->validate([
            'name' => ['required', 'min:3'],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => ['required', 'confirmed', 'min:6']
        ]);

        //hash password
        $FormFeilds['password'] = bcrypt($FormFeilds['password']);

        $user = User::create($FormFeilds);

        auth()->login($user);

        return redirect('/')->with('message', 'User Created and logged in');
    }

    public function logout(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerate();

        return redirect('/')->with('message', 'You have been logged out');
    }

    public function loginForm()
    {
        return view('users.login');
    }

    public function authenticate(Request $request)
    {
        $FormFeilds = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if (auth()->attempt($FormFeilds)) {
            $request->session()->regenerate();
            return redirect('/')->with('message', 'You are logged in');
        }
        return back()->withErrors(['email' => 'invalid Credentails'])->onlyInput('email');
    }
}
