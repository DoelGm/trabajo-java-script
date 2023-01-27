class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    calcularea(){
        return this.ancho*this.alto;
    }

}

function saludar (){
    alert("buenos dias");
}

function area(){
        var ancho = document.getElementById("ancho").value;
        var alto = document.getElementById("alto").value;
        let rectangulo1 = new Rectangulo(alto, ancho);
        alert(rectangulo1.calcularea());
}