<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Message implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $username;
    public $message;

    public function __construct($username, $message)
    {
        $this->username = $username;
        $this->message = $message;
    }

    public function broadcastOn()
    {
        //channel name
        return ['chat'];
    }

    public function broadcastAs()
    {
        //message
        return 'message';
    }
}
