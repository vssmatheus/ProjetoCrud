function RetornarDespesas(){
    
    var conteudo = `<tbody>`;    
    var somaTotal = 0;
    var list  = db.database()
   
    
        .ref('minhasdespesas').on('value',function(res){
            var i=0;
            res.forEach(function(item){                
                console.log(item.val());
                
                conteudo += `<tr>
                
                <td>`+item.val().description+`</td>
                <td>R$ `+item.val().amount+`</td> 
                <td>`+item.val().dateAdd+`</td>
                
                <td><button data-toggle="modal" data-target="#exampleModal" value="exampleModal" onclick="editRow(`+i+`)" class="btn btn-primary"><i class="fa fa-edit title="Editar"></i>  Editar</button></td>
                <td><button value="Delete" onclick="deleteRow(`+i+`)" id="btnDelete" class="btn btn-danger"><i class="fas fa-trash title="Excluir"></i>  Excluir</button></td>
                                
                </tr>`;
                i++;               

                somaTotal+= Number(item.val().amount);
                
            })
            conteudo +=`</tbody>`;
            document.getElementById("somaTotal")
                        .innerHTML += ' '+somaTotal;
            

                        
            $("#tbResultado").append(conteudo);
            
           
        });
        
        
}

function deleteRow(x){
    this.x = x;
    var elem = [];
    var i= 0;
    db.database().ref("minhasdespesas").on("value",function(res){
        res.forEach(function(item){
            elem[i++] = item.key; 
        });
    });
    location.reload();
    console.log(x);
    db.database().ref('minhasdespesas/'+elem[x]).remove();
    $("table").remove();
    path = "confirm.html";
    
    window.alert("Item Excluído");
    
}
// delete icon
