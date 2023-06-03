
function GamePage(props){
return(
<div className="content">
        <h1> gamename</h1>
        <head>

  <title>Название товара</title>
</head>
<body>

  <div class="GamePage">
    <h2>Название товара</h2>
    <img src="/img/1.png "alt="Изображение товара"/>
    <p>Описание товара.</p>
    <p class="price">Цена: $10.99</p>
    <button>Купить</button>

    <button><img className="FavImg" src="/img/empty-heart.png "alt="Изображение товара"/></button>
  </div>

</body>
</div>
);
}
export default GamePage;