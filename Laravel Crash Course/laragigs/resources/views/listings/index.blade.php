<x-layout>
@include('partials/_hero')
@include('partials/_search')
<!-- the variable heading in the get request of the root route -->
<!-- <h1>(openphptag echo $heading ?>)</h1> this is a php with no blade styling -->
{{-- <h1>{{$heading}}</h1> this is a php code with blade styling --}}


<div
                class="lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0 mx-4"
            >
{{-- @if(count($listings)==0)
<p>No Listing Found</p>
@endif --}}
{{--same if functionality can be achived with @unless directive--}}

@unless(count($listings)==0)
{{-- <?php foreach ($listings as $list) : ?> this is a for each loop of php with no blade --}}

@foreach ($listings as $list) {{--this is a for each loop of php with blade directives --}}

   {{-- <h2> 
       <a href="/listing/{{$list['id']}}">{{$list['title']}}</a>
   </h2>
   <p> {{$list['description'] }}  </p> --}}

   <x-listing-card :list="$list"/>

{{-- <?php endforeach; ?> the same analogy as foreach --}}
@endforeach
@else
<p>No Listing Found</p>
@endunless

</div>

</x-layout>
