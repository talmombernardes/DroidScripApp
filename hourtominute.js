// global
var edt1
var edt3
//Called when application is started.
function OnStart()
{
    //Create a layout
    
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );
    lay.SetBackGradientRadial(0.5,0.5,1,"gray","black");
     txt = app.CreateText( "Converter Hours in Minutes" );
    lay.AddChild( txt );
    
    //Create 4 textEdits and add them to layout.

    edt1 = app.CreateTextEdit("");
    edt1.SetTextSize(17);    
    edt1.SetHint("          ");
    edt1.SetTextColor('white');
    lay.AddChild( edt1 );
   
     //--- Standard buttons ---
  
    layDark =  app.CreateLayout( "Linear", "Vertical" );
    layDark.SetBackColor( "Alum" );
    layDark.SetPadding( 0.1, 0.05, 0.1, 0.05 );
    lay.AddChild( layDark );
 
 //Create a "Calculate" button
 
    var btn = app.CreateButton("Calculate",  0.7, -1,"Alum");
    btn.SetOnTouch(btnOnTouch);
    btn.SetTextColor('black');
    layDark.AddChild(btn);
    
    //Add layout to app.
    
    app.AddLayout( lay );
}
 
function btnOnTouch()
{
    var edit2 = 60
    var res = toFloat(edt1)
        * edit2


app.Alert('Total Hours in Minutes: ' + res +' Minutes');
}

function toFloat(control) 
{
//take a control (probably a TextEdit) and return its text as a number
    var value = control.GetText();
    var ret = +(value.replace(',','.'));
    if( isNaN(ret) ) app.ShowPopup(value +" is not a number");
    return ret;
}

