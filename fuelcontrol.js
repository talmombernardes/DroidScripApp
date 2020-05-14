

// global variables

    var gasolinevalue, valuesupplied, carconsumption

    //app.TextToSpeech( "Bem vindo ao Aplicativo Controle da Gasola", 0.9, 0.9 );
    //app.await

//Called when application is started.    

function OnStart()
{   
    lay = app.CreateLayout( "Linear", "FillXY,VCenter" );
    lay.SetBackColor('#9155AD');

    txt = app.CreateText( "Controle da Gasola" );
    txt.SetTextColor('white');
    txt.SetTextSize( 25 );
    
    lay.AddChild( txt );



  
    btn = app.CreateButton("I n i c i a r", 0.3, -5, "Custom");
    btn.SetStyle( "#7D4392", "#7D4392", 6 );
    btn.SetTextColor('white');
    btn.SetOnTouch( RemoveDrawer );
    lay.AddChild( btn );
    

    app.AddLayout( lay );
}

    function RemoveDrawer() {
    app.RemoveLayout( lay );

    

//Create a layout

    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    
//Create a layout  

    layHeader = app.CreateLayout( "Absolute", "Vertical");
    lay.SetBackColor('#7D4392');
    
    lay.AddChild(layHeader);
    app.AddLayout( lay );   
  
    

//btn to exit app

    //btn1 = app.CreateButton("[fa-power-off]",1,1,"FontAwesome");
    //btn1.SetPosition(0.0,0.0,0.1,0.1);  
    //btn1.SetOnTouch(btnn_OnTouch);
    //layHeader.AddChild(btn1);
  
//Create a text

    txt = app.CreateText( "Quantos R$ ira abastecer?" );
    txt.SetTextSize( 18 );
    txt.SetTextColor('#FFFFFF');
    lay.AddChild( txt );
    app.AddLayout( lay );
    
//Create a text filds

    gasolinevalue = app.CreateTextEdit( "",-1,-1 );
    gasolinevalue.SetTextSize(25);
    gasolinevalue.SetHint("0.00");
    gasolinevalue.SetTextColor('#112362');
    lay.AddChild(gasolinevalue, );
    
    txt = app.CreateText( "Qual o preço da gasolina?" );
    txt.SetTextSize( 18 );
    txt.SetTextColor('#FFFFFF');
    lay.AddChild( txt );
    app.AddLayout( lay );
    
    valuesupplied = app.CreateTextEdit("", -1,-1);
    valuesupplied.SetTextSize(25);    
    valuesupplied.SetHint("0.00");
    valuesupplied.SetTextColor('#112362');
    lay.AddChild( valuesupplied, );
    
    txt = app.CreateText( "Consumo do carro por KM" );
    txt.SetTextSize( 18 );
    txt.SetTextColor('#FFFFFF');
    lay.AddChild( txt );
    app.AddLayout( lay );
    
    carconsumption = app.CreateTextEdit("", -1,-1);
    carconsumption.SetTextSize(25);    
    carconsumption.SetHint("0.00");
    carconsumption.SetTextColor('#112362');
    lay.AddChild( carconsumption, );
   
//Standard buttons 
    
    layLight =  app.CreateLayout( "Linear", "Vertical" );
    layLight.SetBackColor( "#7D4392" );
    lay.AddChild( layLight );
 
 //Create a "Calculate" button
 
    var btn = app.CreateButton( " C a l c u l a r ", 0.7, -1, "Custom" );
    btn.SetStyle( "#9155AD", "#9155AD", 6 );
    btn.SetOnTouch(btnOnTouch);
    btn.SetTextSize(17);
    layLight.AddChild( btn );
    
//Add layout to app.
    
    app.AddLayout( lay );
}

function btnOnTouch()
{ 
    const insertedMoney = parseInt(gasolinevalue)
    const priceofGasoline = parseInt(valuesupplied)
    const carLitersKm = parseInt(carconsumption)
    const res = insertedMoney / priceofGasoline * carLitersKm 

    app.Alert(' Você Abasteceu: ' + insertedMoney /  priceofGasoline + ' Litros, e você pode dirigir por: ' + Math.trunc(res)+ ' km ');
    
}

function parseInt(control) 

{
    
//take a control (probably a TextEdit) and return its text as a number

    var value = control.GetText();
    var ret = +(value.replace(',','.'));
    if( isNaN(ret) ) app.ShowPopup(value +" is not a number");
    return ret;
}

//function btn exit

    function btnn_OnTouch()
{
    var c = confirm("Exit app?");
    if(c)
    {
        app.Exit();
}




}


