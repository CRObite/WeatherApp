import icon1 from '../../image/icon01.svg';
import icon2 from '../../image/icon02.svg';

const WoWeAre =() =>{
    return(
        <section class="page__whoweare whoweare">
        <div class="whoweare__container _container">
            <div class="whoweare__header header-block">
                <h2 class="header-block__title">Who We Are</h2>
                <div class="header-block__sub-title">
                Remember, when it comes to the weather, knowledge is power. Trust WeatherNow to provide you with the information you need to stay ahead of the elements. 
                </div>
            </div>
            <div class="whoweare__body">
                <div class="whoweare__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/TMnaV9sLP6Q" title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div class="whoweare__content">
                    <div class="whoweare__top">
                        <h2 class="whoweare__title">Most trusted in 
                            our field</h2>
                        <div class="whoweare__text">H.Appy is committed to delivering accurate and accessible weather forecasts to empower individuals, businesses, and communities to make informed decisions. Join our community today and experience the WeatherNow difference.</div>
                    </div>
                    <div class="whoweare__items">
                        <div class="whoweare__item item-whoweare">
                            <div class="item-whoweare__icon">
                                <img src={icon1} alt="the quick fox jumps over the lazy 
                                dog"/>
                            </div>
                            <div class="item-whoweare__body">
                                <div class="item-whoweare__title">Educational Resources</div>
                                <div class="item-whoweare__text">We aim to educate and inspire</div>
                            </div>
                        </div>
                        <div class="whoweare__item item-whoweare">
                            <div class="item-whoweare__icon">
                                <img src={icon2} alt="the quick fox jumps over the lazy 
                                dog"/>
                            </div>
                            <div class="item-whoweare__body">
                                <div class="item-whoweare__title">Expert Analysis and Insights</div>
                                <div class="item-whoweare__text">Weather patterns</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>                            
    );
}

export default WoWeAre;