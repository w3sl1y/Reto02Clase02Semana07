import React from 'react';
import './assets/css/App.css';

function App() {
  return (
    <div className="container">
      <div class="moomer">
        <div class="logo">  
          <a href="#">MOOMER</a>
          </div>
        <div class="menu">
          <div class="each1">
          <a href="#"><img src="https://www.pngkit.com/png/full/816-8168133_home-logo-house-vector-png-white.png"/>HOME</a>
          </div>
          <div class="each2">
          <a href="#"><img src="https://www.zimbra.com/wp-content/uploads/2020/12/Homepage-product-Zpartners-icon-300x239.png"/>ACCOUNT</a>
          </div>
          <div class="each3">
          <a href="#"><img src="https://eccma.org/private/images/sub_logos/stats.png"/>STATS</a>
          </div>
          <div class="each4">
          <a href="#"><img src="https://www.downloadclipart.net/medium/24314-black-and-white-heart-images.png"/>SUPPORT</a>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="greeting">
          <div class="hello">
            <a><b>Hello</b>, Panji Satrya</a>
          </div>
          <div class="notification">
            <img src="https://www.pngkey.com/png/full/112-1120149_svg-png-transparent-background-notification-icon.png"/>
          </div>
          <div class="search">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/1200px-Search_Noun_project_15028.svg.png"/>
          </div>
        </div>
        <div class="cards">
        <div class="left">
          <div class="top">
            <a>Balance</a>
            <a><b>$ 7,893.66</b></a>
            <a>Your account number is 5531-1002-1398-1728</a>
          </div>
          <div class="bottom">
            <div class="bottom-left">
              <div class="bottom-left-top">
                <div class="text">
                <div class="analytics">
                <a>Analytics</a>
                </div>
                <div class="see">
                <a href="#">See more</a>
                </div>
                </div>
                <div class="graphic">
                  <img src="https://images.vexels.com/media/users/3/129159/isolated/preview/b6536fdfc4c89f86e1ecf2fa85f2ca95-infografia-de-grafico-de-barras-de-colores-2d.png"/>
                </div>
              </div>
              <div class="bottom-left-bottom">
              <div class="text">
                <div class="analytics">
                <a>Safe your money</a>
                </div>
                <div class="see">
                <a href="#">See more</a>
                </div>
                </div>
                <div class="graphic">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/concept-of-saving-money-2225064-1852483.png"/>
                </div>
              </div>
            </div>

            <div class="bottom-right">
              <div class="bottom-right-top">
              <div class="text">
                <div class="analytics">
                <a>+30,000</a>
                </div>
                <div class="see">
                <a href="#">See more</a>
                </div>
                </div>
                <div class="graphic">
                <img src="https://images.vexels.com/media/users/3/140487/isolated/preview/8e77dd6a09ce0f0a31bd7d077321dd7b-grafico-de-lineas-de-colores-en-crecimiento.png"/>
                </div>
              </div>
              <div class="bottom-right-bottom">
                <div class="text">
                <div class="analytics">
                <a>Stats</a>
                </div>
                <div class="see">
                <a href="#">See more</a>
                </div>
                </div>
                <div class="graphic">
                <img src="https://cdn.pixabay.com/photo/2013/07/12/15/21/pie-chart-149727_960_720.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="profile">
            <a>My profile</a>
          </div>
          <div class="my-img">
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"/>
          </div>
          <div class="name">
          <a>Panji Satrya</a>
          </div>
          <div class="description">
          <a>#24145373</a>
          </div>
          <div class="edit">
            <div class="pencil">
            <button>✏</button>
            </div>
            <div class="view-profile">
            <button>View profile</button>
            </div>
          </div>

          <div class="transaction">
          <div class="last">
          <a>Your last transaction</a>
          </div>
          <div class="first">
          <a href="#">20/03/2019</a>
          </div>
          <div class="second">
          <a href="#">11/03/2019</a>
          </div>
          <div class="third">
          <a href="#">26/02/2019</a>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
