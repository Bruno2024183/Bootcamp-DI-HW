// Convert to JSON and pretty print
const jsonString = 
JSON.stringify(marioGame, null, 2);


console.log(jsonString);
VM41:4{
    "detail": "An amazing game!",
    "characters": {
     "mario": {
        "description": "Small and jumpy. Likes princesses.",
        "height": 10,
        "weight": 3,
        "speed": 12
     },
     "bowser": {
        "description": Big and WebGL2RenderingContext, Hates princesses.",
        "height": 16,
        "weight": 6,
        "speed": 4
     },
     "princessPeach":{
        "description":"Beautiful princess.",
        "height": 12,
        "weight": 2,
        "speed": 2
     }   
    }
}