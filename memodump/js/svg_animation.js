'use strict';

var animationList = new Array();

window.addEventListener( 'load', function() 
{
//    <line x1="180" y1="370" x2="500" y2="50" stroke="black" stroke-width="15px"/>
/*
    var xmlns = "http://www.w3.org/2000/svg";
    var txtElem = document.createElementNS( xmlns, "text" );
    txtElem.setAttributeNS( null, "x", 50 );
    txtElem.setAttributeNS( null, "y", 50 );
    var helloTxt = document.createTextNode( "Hello World!" );
    txtElem.appendChild( helloTxt )
    document.documentElement.appendChild( txtElem );

*/
/*
    var animation0 = new Object();
    animation0.skipCycles = 0;
    animation0.waveX = 0;
    animation0.waveY = 0;
    animation0.id = "a0";
    animation0.Animate = function()
    {
        if( this.skipCycles > 0 )
        {
            --this.skipCycles;
            return;
        }

        var el = document.getElementById( this.id );
        if( !el )
        {
            
        }
        
    };
    animationList.push( animation0 );

    AnimateAll();
*/
});

function AnimateAll()
{
    for( var i=0; i<animationList.length; ++i )
    {
        animationList[i].Animate();
    }

    //requestAnimationFrame( AnimateAll, document.getElementById("skyline") );
}

function EnsureElement( id )
{
    if( ! document.getElementById( id ) )
    {
        var xmlns = "http://www.w3.org/2000/svg";
        var txtElem = document.createElementNS( xmlns, "text" );
        txtElem.setAttributeNS( null, "x", 50 );
        txtElem.setAttributeNS( null, "y", 50 );
        var helloTxt = document.createTextNode( "Hello World!" );
        txtElem.appendChild( helloTxt )
        document.documentElement.appendChild( txtElem );
    }
}


/*
function Animation0( nextStep )
{
    if( ! ( nextStep >= 0 && nextStep <= 100 ) )
    {
        return false;
    }

    var el = document.getElementById( "welle-0" );

    var x = nextStep + 100
    document.getElementById( "welle-0" ).setAttribute( "x", x );

    return true;
}

function Animate()
{
    if( Animation0( current_step ) )
    {
        ++current_step;
    }

    if( !current_animation )
    {
        // choose random animation
    }
    else
    {
        
    }

    requestAnimationFrame( Animate, document.getElementById("skyline") );
}

function AnimateOld()
{
    var el = document.getElementById( "welle-0" );
    //el.setAttribute( "transform", "rotate(20)" );

    var x = parseInt( el.getAttribute( "x" ) );
    if( x > 100 )
    {
        x = 0;
    }
    document.getElementById( "welle-0" ).setAttribute( "x", x+2 );
    //requestID = requestAnimationFrame( Animate, el );
}
*/

