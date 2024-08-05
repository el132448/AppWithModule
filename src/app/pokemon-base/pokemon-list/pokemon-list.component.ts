import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  
  pokemon: string;

  constructor() { 
    this.pokemon = ''
  }

  ngOnInit(): void {
    console.log('PokemonListComponent initialized');
  }

  title: string = "baby beavers"
  imgSrc: String = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzBMH-CPo3tYReLnbDnRAaBFBEPMzqnggtw&s"
  favouriteAnimal:string = "turtle";
  pokemonName: string = "";
  isCool: boolean = false

  pokemons: Pokemon[] =[
    {
      id: '001',
      name: 'pikachu',
      type: 'electric',
      isCool: false,
      isStylish: false
    },{
      id: '002',
      name: 'squirtle',
      type: 'water',
      isCool: false,
      isStylish: true
    },{
      id: '003',
      name: 'charmander',
      type: 'fire',
      isCool: true,
      isStylish: true
    }
  ]

  handleClick(value: any){
    console.log(value);
  }

  handleChange(event : any): void{
    this.pokemonName = event.target.value;
  }


}
