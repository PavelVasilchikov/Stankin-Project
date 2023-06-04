
function GamePage({GameDescription,Game}){
return(
<div className="content">
        <h1> gamename</h1>


  <div class="GamePage">
    <h2>Название товара</h2>
    <img src={Game.imageUrl} alt="Изображение товара"/>
   
    <p>Описание товара.</p>
     {GameDescription.map((obj)=>( 
            <p>
            Description:{obj.description};
            </p>
             ))} 
   
    <button>Купить</button>
   
    <button><img className="FavImg" src="/img/empty-heart.png "alt=""/></button>
  </div>


</div>
);
}
export default GamePage;