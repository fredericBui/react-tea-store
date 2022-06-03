import Product from "./Product";

const teas = [
    {
      teaId : 1,
      teaName : "Pai mu tan",
      teaDescription : <p>Il porte le nom d'une des plus belles fleurs de Chine : La pivoine blanche.</p>,
      teaImage : "images/pai-mu-tan.jpg",
      teaIsAvailable : true
    },
    {
      teaId : 2,
      teaName : "Shan du laos",
      teaDescription : <p>Les bourgeons, parés de reflets vert argenté, offrent une liqueur pâle, jaune doré.<br></br> Les feuilles sèches délivrent un parfum végétal sec et floral.<br></br> Infusée, la liqueur tapisse le palais d'une douceur veloutée aux notes de vanille que viennent enrichir les notes florales et végétales en fin de bouche.</p>,
      teaImage : "images/shan-du-laos.jpeg",
      teaIsAvailable : false
    },
    {
      teaId : 3,
      teaName : "Silvery needle",
      teaDescription : <p>Composé uniquement de bourgeons argentés issus d'une récolte sélective à l’arrivée du printemps, ce thé blanc est l'un des plus prestigieux.<br></br> D'une grande pureté, il symbolise la quintessence des grands crus chinois.<br></br> Sa liqueur légère et limpide aux reflets orangés distille des saveurs de poire au sirop accompagnées de notes lactées.<br></br> La dégustation se conclut avec une jolie finale boisée qui imprègne longuement le palais.</p>,
      teaImage : "images/silvery-needle.jpeg",
      teaIsAvailable : true
    }
  ]

function ProductList(){
    return(
        <div>
            <Product 
                name={teas[0].teaName} 
                image={teas[0].teaImage} 
                description={teas[0].teaDescription}
                isAvailable={teas[0].teaIsAvailable}>
            </Product>
            <Product 
                name={teas[1].teaName} 
                image={teas[1].teaImage} 
                description={teas[1].teaDescription}
                isAvailable={teas[1].teaIsAvailable}>
            </Product>
            <Product 
                name={teas[2].teaName} 
                image={teas[2].teaImage} 
                description={teas[2].teaDescription}
                isAvailable={teas[2].teaIsAvailable}>
            </Product>
        </div>
    );
}

export default ProductList;