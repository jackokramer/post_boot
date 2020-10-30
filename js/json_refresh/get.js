        $(document).ready(function(){
            $.get("https://pokeapi.co/api/v2/pokemon/1/", function(res){
//                console.log(res.types[0].type.name);
//                console.log(res.types[1].type.name);
                let html_str = "";
                html_str = "<h4>Types</h4>";
                html_str = "<ul>";
                for(let x =0; x<res.types.length; x++){
                    html_str +="<li>"+res.types[x].type.name+"</li>"
                }
                html_str = "</ul>";
                $('#more-info').html(html_str)
            }, 'json')
        })