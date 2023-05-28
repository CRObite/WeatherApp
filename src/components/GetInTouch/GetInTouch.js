
import bigicon01 from '../../image/iconbig01.svg';
import bigicon02 from '../../image/iconbig02.svg';
import bigicon03 from '../../image/iconbig03.svg';

const GetInTouch = () =>{
    return(
    <section class="page__getintouch getintouch">
                                <div class="geintouch__header header-block">
                                    <h2 class="header-block__title">Get In Touch</h2>
                                    <div class="header-block__sub-title">
                                    Remember, when it comes to the weather, knowledge is power. Trust WeatherNow to provide you with the information you need to stay ahead of the elements.
                                    </div>
                                </div>
                                <div class="getintouch__items">
                                    <div class="getintouch__item item-getintouch">
                                        <div class="item-getintouch__icon">
                                            <img src={bigicon01} alt="getintouch"/>
                                        </div>
                                        <div class="item-getintouch__emails">
                                            <a href="mailto:happy.young@example.com" class="item-getintouch__email">happy.young@example.com</a>
                                            <a href="mailto:happy.young@ple.com" class="item-getintouch__email">happy.young@ple.com</a>
                                        </div>
                                        <div class="item-getintouch__label">Get Support</div>
                                        <a href="" class="item-getintouch__button">Submit Request</a>
                                    </div>
                                    <div class="getintouch__item item-getintouch item-getintouch_active">
                                        <div class="item-getintouch__icon">
                                            <img src={bigicon02} alt="getintouch"/>
                                        </div>
                                        <div class="item-getintouch__emails">
                                            <a href="mailto:happy.young@example.com" class="item-getintouch__email">happy.young@example.com</a>
                                            <a href="mailto:happy.young@ple.com" class="item-getintouch__email">happy.young@ple.com</a>
                                        </div>
                                        <div class="item-getintouch__label">Get Support</div>
                                        <a href="" class="item-getintouch__button">Submit Request</a>
                                    </div>
                                    <div class="getintouch__item item-getintouch">
                                        <div class="item-getintouch__icon">
                                            <img src={bigicon03} alt="getintouch"/>
                                        </div>
                                        <div class="item-getintouch__emails">
                                            <a href="mailto:happy.young@example.com" class="item-getintouch__email">happy.young@example.com</a>
                                            <a href="mailto:happy.young@ple.com" class="item-getintouch__email">happy.young@ple.com</a>
                                        </div>
                                        <div class="item-getintouch__label">Get Support</div>
                                        <a href="" class="item-getintouch__button">Submit Request</a>
                                    </div>
                                </div>
                            </section>
    );
}

export default GetInTouch;