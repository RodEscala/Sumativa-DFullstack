import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    LoginComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
[x: string]: any;

  productos:any[]=[
    {
        "id":1,
        "title": "Arenero para Gatos",
        "description": "Proporciona un espacio cómodo y limpio para que tu gato haga sus necesidades.",
        "price": 5000,
        "image":"assets/img/arenero.jpg",
        "discount": 0
    },
    {
        "id":2,
        "title":"Cama para Perros",
        "description":"Brinda comodidad a tu mascota con esta suave cama, perfecta para descansar y dormir plácidamente.",
        "price": 15000,
        "image":"assets/img/CamaPerros.jpg",
        "discount":0

    },
    {
        "id":3,
        "title":"Champú para Perros Tankful",
        "description":"El champú Tankful está formulado para limpiar y acondicionar el pelaje de tu perro, dejándolo suave y con un agradable aroma.",
        "price": 4000,
        "image":"assets/img/tankful.jpg",
        "discount":0

    },
    {
        "id":4,
        "title":"Comida para Perros Pedigree",
        "description":"Proporciona una nutrición completa y balanceada con Pedigree, diseñada para mantener a tu perro sano y feliz.",
        "price": 12000,
        "image":"assets/img/pedigree.webp",
        "discount":0

    },
    {
        "id":5,
        "title":"Comida para Gatos Purina Gati",
        "description":"Nutrición deliciosa y completa para gatos, formulada para satisfacer sus necesidades específicas.",
        "price": 8000,
        "image":"assets/img/gati.webp",
        "discount":0

    },
    {
        "id":6,
        "title":"Arena para Gatos",
        "description":"Arena absorbente y de control de olores, ideal para mantener el arenero limpio y cómodo.",
        "price":6000,
        "image":"assets/img/easyClean.png",
        "discount":0

    },
    {
        "id":7,
        "title":"Queso Cheddar Los Alerces",
        "description":"Este queso cheddar de sabor fuerte y textura firme es ideal para gratinar, sándwiches y picnics. Su color amarillo vibrante y su sabor distintivo lo convierten en un favorito en cualquier tabla de quesos. Perfecto para los amantes del buen queso.",
        "price":3000,
        "image":"assets/img/quesoCheddar.jpg",
        "discount":0

    },
    {
        "id":8,
        "title":"Leche condensada Nestle",
        "description":"Esta rica y cremosa leche ha sido evaporada y endulzada, perfecta para preparar postres como flanes, tres leches, o simplemente para añadir a café y batidos. Su sabor dulce y textura suave harán que tus creaciones sean irresistibles. ¡Descubre la dulzura en cada gota!",
        "price":250,
        "image":"assets/img/lecheCondensada.webp",
        "discount":0

    },
    {
        "id":9,
        "title":"Yoghurt Premium Griego",
        "description":"Experimenta la frescura y cremosidad de nuestro yogur griego. Alto en proteínas y bajo en grasas, es el snack perfecto o un excelente complemento para tus desayunos. Disfrútalo solo, con frutas o como base para tus recetas favoritas.",
        "price":400,
        "image":"assets/img/yoghurtGriego.jpg",
        "discount":0

    },
    {
        "id":10,
        "title":"Leche entera Colun",
        "description":"Nutritiva y deliciosa, nuestra leche entera es rica en calcio y vitaminas esenciales. Perfecta para beber sola, agregar a tus cereales o usar en recetas, ofrece un sabor cremoso y una textura satisfactoria que toda la familia disfrutará.",
        "price":1200,
        "image":"assets/img/lecheEntera.webp",
        "discount":0

    },
    {
        "id":11,
        "title":"Mantequilla Colun",
        "description":"Disfruta de la suavidad y el sabor auténtico de nuestra mantequilla. Elaborada con crema de alta calidad, es perfecta para untar, cocinar y hornear. Su textura cremosa y rico sabor la convierten en un ingrediente esencial en tu cocina.",
        "price": 1400,
        "image":"assets/img/mantequilla.webp",
        "discount":0

    },
    {
        "id":12,
        "title":"Queso crema Philadelphia",
        "description":"Queso crema Philadelphia Este cremoso y suave queso crema es ideal para untar, cocinar o preparar deliciosos postres. Su sabor ligeramente ácido y su textura sedosa lo hacen perfecto para hacer dips, cheesecakes y untar en bagels. ¡Prueba la calidad de Philadelphia!",
        "price":1500,
        "image":"assets/img/quesoPhiladelpia.webp",
        "discount":0

    },
    {
        "id":13,
        "title":"Cloro Desinfectante",
        "description":"El cloro desinfectante es un potente limpiador que elimina bacterias y gérmenes, ideal para la limpieza profunda de superficies en el hogar. Perfecto para desinfectar cocinas, baños y áreas de alto tráfico.",
        "price":2500,
        "image":"assets/img/cloro.webp",
        "discount":0

    },
    {
        "id":14,
        "title":"Desinfectante Multiuso",
        "description":"Este desinfectante multiuso es ideal para limpiar y desinfectar cualquier superficie de tu hogar. Su fórmula efectiva elimina olores y deja un aroma fresco, proporcionando un entorno limpio y saludable.",
        "price":2000,
        "image":"assets/img/desinfectante.webp",
        "discount":0

    },
    {
        "id":15,
        "title":"Esponja de Limpieza",
        "description":"Nuestra esponja de limpieza es perfecta para lavar platos, limpiar superficies y realizar tareas del hogar. Su textura suave y duradera asegura una limpieza eficaz sin rayar las superficies.",
        "price":1000,
        "image":"assets/img/esponja.webp",
        "discount":0

    },
    {
        "id":16,
        "title":"Mr. Musculo Limpiador",
        "description":"Mr. Musculo es el aliado perfecto para una limpieza profunda. Su fórmula poderosa elimina la grasa y la suciedad más difícil, dejando tus superficies brillantes y sin residuos.",
        "price":1800,
        "image":"assets/img/mrMusculo.jpg",
        "discount":0

    },
    {
        "id":17,
        "title":"Quix Limpiador Líquido",
        "description":"Quix es un limpiador líquido ideal para dejar tus superficies brillantes y libres de grasa. Su fórmula concentrada proporciona un rendimiento excepcional en cualquier tarea de limpieza del hogar.",
        "price": 1500,
        "image":"assets/img/quix.webp",
        "discount":0

    },
    {
        "id":18,
        "title":"Sapolio Limpiador de Vidrios",
        "description":"Sapolio limpiador de vidrios proporciona una limpieza brillante y sin marcas en tus ventanas y espejos. Su fórmula especial elimina la suciedad y los residuos, dejando tus cristales relucientes.",
        "price": 2000,
        "image":"assets/img/sapolio.jpg",
        "discount":0

    },
    {
        "id":19,
        "title":"1kg Naranjas Frescas",
        "description":"Disfruta de nuestras naranjas frescas, jugosas y llenas de vitamina C. Perfectas para hacer jugos, ensaladas o simplemente para comer solas. Su sabor dulce y ácido las convierte en un snack saludable.",
        "price":2000,
        "image":"assets/img/Naranjas.jpg",
        "discount":0

    },
    {
        "id":20,
        "title":"1kg Cebolla Fresca",
        "description":"Nuestras cebollas frescas son perfectas para añadir sabor a tus platillos. Su textura crujiente y sabor distintivo son ideales para cocinar, hacer salsas o disfrutar en ensaladas.",
        "price": 1500,
        "image":"assets/img/Cebolla.jpg",
        "discount":0

    },
    {
        "id":21,
        "title":"Piña Jugosa",
        "description":"Nuestra piña fresca es dulce y refrescante, perfecta para disfrutar sola, en batidos o como parte de tus recetas tropicales. Su sabor tropical te transportará a la playa en cada bocado.",
        "price":1800,
        "image":"assets/img/piña.webp",
        "discount":0

    },
    {
        "id":22,
        "title":"1kg Tomates Rojos",
        "description":"Los tomates frescos son esenciales en cualquier cocina. Ricos en antioxidantes, son perfectos para ensaladas, salsas o como ingrediente principal en tus platillos favoritos.",
        "price":1400,
        "image":"assets/img/tomates.jpg",
        "discount":0

    },
    {
        "id":23,
        "title":"1kg Zanahorias ",
        "description":"Nuestras zanahorias frescas son ideales para snacks saludables o como ingrediente en ensaladas y guisos. Ricas en nutrientes y con un sabor dulce, ¡no puedes dejar de probarlas!",
        "price":1200,
        "image":"assets/img/zanahorias.webp",
        "discount":0

    },
    {
        "id":24,
        "title":"1 trozo Zapallo Fresco",
        "description":"El zapallo es un ingrediente versátil en la cocina, ideal para preparar sopas, purés o guisos. Rico en vitaminas y con un sabor suave, es perfecto para platos reconfortantes.",
        "price":1500,
        "image":"assets/img/zapallo.jpg",
        "discount":0

    }
  ];
  // "id":1,
  // "title": "Arenero para Gatos",
  // "description": "Proporciona un espacio cómodo y limpio para que tu gato haga sus necesidades.",
  // "price": 5000,
  // "image":"assets/img/arenero.jpg",
  // "discount": 0

  cantidadProductos:number=0;
  listcarrito:any[]=[];
  AddProducto(producto:any){

    const {id,title, price } = producto;
    let quantity:number=1;
    const index:number = this.listcarrito.findIndex( item => item.id === id)

    if(index !== -1){
      this.listcarrito[index].quantity += 1;
    }else{
      this.listcarrito.push({title,price,quantity })
    }
    this.addNumberCarrito();
  }

  addNumberCarrito():void{

    this.cantidadProductos = this.listcarrito.length;

  }

}
