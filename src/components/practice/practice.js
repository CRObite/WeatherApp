import image1 from '../../image/01.jpg';
import image2 from '../../image/02.jpg';
import image3 from '../../image/03.jpg';
import image4 from '../../image/04.jpg';
const Practice =() =>{
    return(
    <div class="wrapper">
                    <main class="page">
                            <section class="page__practice practice">
                                <div class="practice__container _container">
                                    <div class="practice__header header-block">
                                        <h2 class="header-block__title">Welcome to H.Appy Weather:</h2>
                                        <div class="header-block__sub-title">
                                        Your Trusted Source for Accurate Weather Forecasts.Are you tired of unpredictable weather ruining your plans? Look no further! WeatherNow is here to provide you with the most reliable and up-to-date weather forecasts to help you stay prepared and make the most of your day.
                                        </div>
                                    </div>
                                    <div class="practice__body">
                                        <div class="practice__column">
                                            <article class="practice__item item-practice">
                                                <div class="item-practice__content">
                                                    <a href="" class="item-practice__link">
                                                        <h4 class="item-practice__title">Accurate and Reliable Forecasts</h4>
                                                    </a>
                                                    <div class="item-practice__text">
                                                    At WeatherNow, accuracy is our top priority. We leverage state-of-the-art technology and access to real-time data to deliver precise weather forecasts for your location.
                                                    </div>
                                                </div>  
                                                <a href="" class="item-practice__image _ibg">
                                                    <img src={image1} alt="A single source of truth"/>
                                                </a>
                                            </article>
                                        </div>
                                        <div class="practice__column">
                                            <article class="practice__item item-practice">
                                                <div class="item-practice__content">
                                                    <a href="" class="item-practice__link">
                                                        <h4 class="item-practice__title">Global Coverage</h4>
                                                    </a>
                                                    <div class="item-practice__text">
                                                    WeatherNow covers a vast network of locations worldwide, ensuring that you can access accurate weather information wherever you are. Whether you're traveling for business or pleasure, our forecasts will help you stay informed 
                                                    </div>
                                                </div>  
                                                <a href="" class="item-practice__image _ibg">
                                                    <img src={image2} alt="Fastest way to organize"/>
                                                </a>
                                            </article>
                                        </div>
                                        <div class="practice__column">
                                            <article class="practice__item item-practice">
                                                <div class="item-practice__content">
                                                    <a href="" class="item-practice__link">
                                                        <h4 class="item-practice__title">User-Friendly Interface</h4>
                                                    </a>
                                                    <div class="item-practice__text">
                                                    Our user-friendly website makes it effortless to find the information you need. Simply enter your location or use our interactive map, and within seconds, you'll have access to detailed forecasts, including temperature, precipitation, wind speed, and more. 
                                                    </div>
                                                </div>  
                                                <a href="" class="item-practice__image _ibg">
                                                    <img src={image3} alt="Fastest way to take action"/>
                                                </a>
                                            </article>
                                        </div>
                                        <div class="practice__column">
                                            <article class="practice__item item-practice">
                                                <div class="item-practice__content">
                                                    <a href="" class="item-practice__link">
                                                        <h4 class="item-practice__title">Customizable Notifications</h4>
                                                    </a>
                                                    <div class="item-practice__text">
                                                    Stay one step ahead of the weather with our customizable notifications. Set up alerts for severe weather conditions, temperature changes, or precipitation forecasts, and receive timely updates via email or SMS.
                                                    </div>
                                                </div>  
                                                <a href="" class="item-practice__image _ibg">
                                                    <img src={image4} alt="Work better together"/>
                                                </a>
                                            </article>
                                        </div>
                                    </div>
                                </div>    
                            </section>
                        </main>
        </div>  
    );
}

export default Practice;