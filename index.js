function scuberGreetingForFeet(city){

  if (city <= 400){
            return "This one is on me!";
    }
    else if (city > 2000 && city < 2500){
        return "I will gladly take your thirty bucks.";
    }
    else if(city > 2500){
        return "No can do.";
    }
  
  }


function ternaryCheckCity(city){

  if (city === "NYC") {
    return "Ok, sounds good.";
}
else{
    return "No go.";
}
}

function switchOnCharmFromTip(tip){
  
   switch (tip) {
    case 'generous':
    return "Thank you so much.";
    break
    case 'not as generous':
    return "Thank you.";
    break 
    default:
    return 'Bye.';
}
}