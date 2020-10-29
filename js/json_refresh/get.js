        $(document).ready(function(){
            $.get("https://pokeapi.co/api/v2/pokemon/1/", function(res){
                console.log(res.types[0].type.name);
                console.log(res.types[1].type.name);
                $('#more-info').html("<p>" + res.abilities[0].name +"</p>")
            }, 'json')
        })