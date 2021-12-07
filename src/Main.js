
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2020, 12, 30) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 6250) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 50)
            };
            // 延迟1s开始
            setTimeout(timer, 30);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>We have walked together: <span className="date-text">{d}</span> Days <span className="date-text">{hour}</span> Hours <span className="date-text">{minute}</span> Minutes <span className="date-text">{second}</span> Seconds </p>
                )
            }
        }
        return (
            <div className="Appp" >
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>Hello! Love ♥♥</h1>
                    <br></br>
                    <p >♥♥ Before the sensationalism begins, let's play a song as the background music! Abara Kadabara Some Music Please!! ♥♥</p>
                    <p>♥♥ Today is our First anniversary. From Feb 8, 2020 to the present, we have experienced many things together,
                    There was laughter and quarrel, and we broke up because of some things, but we all came over. ♥♥</p>

                    <p> ♥♥ It all started with the beautiful thing --- Yep thats Table Tennis.
                    Our Chapter One started there , I was very shy as well as excited while tutoring you,at times when you won the point that cute smile which you gave just fluttered my heart, the more time we spend together after the matches,
                    going to Tea Talks (our favourite Spot) as I was not that talkative but I always kept searching for random topics to lengthen our conversation , to lengthen the time , the long it was the more my liking grew for you.♥♥
                </p>
                    <p>♥♥Chapter Two - The way you came all dressed up on the scooty and the way you stopped at the corner where I was standing ,That mesmerizing smell that came straight from your hair and the way you Shampooed your hair all these
                    things were just like a heavenly dream in which I was with a beautiful cute Barbie Doll.
                    Our unplanned trips, the most funnier part was the coffie house which we not found despite of following the gooogle maps.You know kind of Bhulakkad we are and you are another Level Master in that.. Yeah! The things we experienced
                    in different places allowed us to see the true heart of each other and deepened our feelings. "Years The more the moon passes, the more I feel in love♥♥ with you."♥♥
                </p>
                    <p>
                        ♥♥ Chapter 3 - Tekri , Lake our goto places , all these memories are always with me and whenever I see the captured moments , I crave for you and deeply miss you , our college days ,those Tea Talks,Robaroo Gig-A-Night all that just make me feel nostalgic.♥♥
                       <p> ♥♥ Chapter 4 - Period of my intern ,where you was always motivated me , guided me to the rightpath and was always there for me ,this was the time when my liking turned into Love the best feeling which is there when you are with me.Even in the video calls
                        your face and those beautiful eyes fluttered my heart and feelings just grew stronger and deeper just like our relationship.There were times when we fought,broke up,certain things disturbed us but we stayed together and overcome all of that.I feel protected
                        and safe when you are there with me guiding me to the right path in every field and this makes my Love more stronger for you.
                        Sharing each others problem,topics and difficulties makes the bond more strong.There are times when I made you sad , have done some mistakes,I regret those and will never repeat them again all I just want is you to just be there with me Always.♥♥</p>
                        <p>♥♥ A year has flown by, and I didn't even realize it. Is the rest of our lives together going to run just as smoothly? I hope so. Wishing you a very happy anniversary ♥♥.</p>
                    </p>
                    <p>♥♥ I’m not good at expressing words. When I write this webpage and say so many words, I just want to express the simple three words :-
                    "♥♥I love you♥♥". The sensational thing is: "My heart is a single room, I want just you to be there!"♥♥.
                </p>
                    <p>♥♥ Finally, I wish you our very Happy 1st Anniversary! with Lots of Love ♥♥</p>


                    <div style={{ textAlign: 'right' }}>
                        <p>Love you ❤️ Nikita Soni</p>
                        <p> ❤️ With Lots of Love ❤️ </p>
                        <p>Feb 8, 2021</p>
                    </div>

                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main
