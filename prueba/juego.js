class Pokemon {
    Nombre;
    defenceBehavior;
    fightBehavior;
    setFightBehavior(lucha){
        this.fightBehavior=lucha;
    }
    setDefenceBehavior(defensa){
        this.defenceBehavior=defensa;
    }
    defender(){
        this.defenceBehavior=defensa;
    }
    luchar(){
        this.fightBehavior=lucha
    }
}
class Picachu extends Pokemon{

} 
class Charmanger extends Pokemon{

}
class colaDeAcero{
    ataca(Picachu){
        console.log('Picachu ataca con cola de Acero');
    }
}
class inpacTrueno{
    ataca(Picachu){
        console.log('Picachu ataca con inpacTrueno');
    }
}
class esquiva{
    defensa(Picachu){
        console.log('Picachu esquiba los ataques')
    }
}
class vuelo{
    defensa(Picachu){
        console.log('Picachu elevate')
    }
}
class fuego{
    ataque(Charmanger){
        console.log('Charmanger lanza volas de fuego')
    }
}
class incendio{
    ataque(Charmanger){
        console.log('Charmanger expande tu fuego')
    }
}
class salvate{
    defensa(Charmanger){
        console.log('Charmanger esquiba los ataques')
    }
}
class camuflate{
    defensa(Charmanger){
        console.log('Charmanger camuflate en el fuego')
    }
}
