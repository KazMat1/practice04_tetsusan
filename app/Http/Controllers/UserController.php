<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    //
    public function index() {
        return inertia('User/Index', [
            'users' => User::all()
        ]);
    }
    public function create() {
        return inertia('User/Create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
                'name' => ['required', 'max:50'],
                'password' => ['required', 'max:50'],
                'email' => ['required', 'max:50', 'email'],
            ]
        );

        if($request->avatar){
            $file_name = $request->file('avatar')->getClientOriginalName();
            $request->file('avatar')->storeAs('public',$file_name);
            $validated['avatar_file_path'] = '/storage/' . $file_name;
        }

        User::create($validated);

        return redirect()->route('user.index');
    }
}
