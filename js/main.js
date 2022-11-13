$(document).ready(function(){

    $('.img-talking-c').attr('src','./img/bg_talking_c.png');
    $('.img-talking-l').attr('src','./img/bg_talking_l.png');
    $('.img-talking-r').attr('src','./img/bg_talking_r.png');

    $('#section3 .img-hand, #section3 .img-btn, #section3 .text').mouseover(function(){
        $(this).parents('.btn-group').find('.img-hand').css('opacity',1)
    }).mouseout(function(){
        $(this).parents('.btn-group').find('.img-hand').css('opacity',0)
    });
    
    // Logo(header、第一屏，小版互換)
    let width = document.body.clientWidth;
    // let height = document.body.clientHeight;
    function logoImgChange(w){
        if(w < 768){
            $('.img-logo-big').attr('src','./img/logo01.png');
            $('.img-logo-small').attr('src','./img/logo02.png');
            $('.img-question1').attr('src','./img/question_1_m.png');
            $('.img-question3').attr('src','./img/question_3_m.png');
        }else{
            $('.img-logo-big').attr('src','./img/logo02.png');
            $('.img-logo-small').attr('src','./img/logo01.png');
            $('.img-question1').attr('src','./img/question_1.png');
            $('.img-question3').attr('src','./img/question_3.png');
        }
    }

    logoImgChange(width);
    $( window ).resize(function(){
        let width = document.body.clientWidth;
        logoImgChange(width);
    })





    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
        '(min-width:768px)':function(){
            // -------------------------------------------------------------------------------------第1屏
            // scrollTrigger，第1屏scroll後觸發
            let st1 = {
                trigger: "#trigger02",  //觸發得物件
                // endTrigger: '#trigger03',
                start: "top bottom",
                end: "bottom top", 
                // markers: true, // 顯示標記
                scrub: true
            };


            // 兩朵雲，第1屏後消失
            gsap.to(['.img-cloud01','.img-cloud02'], {
                left: 0,
                scale: 0,
                top: '-=50px',
                scrollTrigger: st1
            })
            
            let tlFirst = gsap.timeline({
                scrollTrigger: st1
            });
            tlFirst.to('.text-ready', {  // 1.ready文字消失
                opacity: 0,
            })
            .to('.light-red', {          // 2.紅燈"亮"，其他燈"暗"、ready文字換成go
                opacity: 1,
            })
            .to(['.light-yellow','.light-green'], {
                opacity: 0,
            },"<")
            .to('.text-ready', {
                text: 'GO !!',
            },"<")
            .to('.light-yellow', {      // 3.黃燈"亮"，其他燈"暗"
                opacity: 1,
            })
            .to(['.light-red','.light-green'], {
                opacity: 0,
            },"<")
            .to('.light-green', {       // 4.綠燈"亮"，其他燈"暗"、go顯示
                opacity: 1,
            })
            .to(['.light-red','.light-yellow'], {
                opacity: 0,
            },"<")
            .to('.text-ready', {
                opacity: 1,
            },"<")
            .to(['.img-light','.light-green','.groups'], {  // 5.紅綠燈桿、綠燈、go消失
                opacity: 0,
            })
            .to('.text-ready', {
                opacity: 0,
            },"<")
            .to(['.img-start','#section1'], { // 6.起跑桿、第1屏消失、右上logo顯示
                opacity: 0,
            })
            .to('.img-logo-small', {
                opacity: 1,
            },"<")
            .to(['.img-cloud01','.img-cloud02'], {
                opacity: 0,
            })

            
            // -------------------------------------------------------------------------------------第2屏
            const tlSecond = gsap.timeline({
                scrollTrigger: {
                    trigger: "#section2",
                    pin: true,
                    // markers: true,
                    scrub: true,
                },
            });

            tlSecond.to("#section2 .title", { opacity: 1 });
            tlSecond.to('.img-road', { // 跑道、人物們縮小、樹出現
                height: '9.6%',
            },"<")
            .to(['#character_f2e, #character_ui'], { 
                height: '33.89%', 
            },"<")
            .to('#character_team', {
                height: '29.72%',
            },"<")
            .to('.img-tree', {
                y: '-5%',
            },"<")
            tlSecond.from(".question1", { xPercent: "-100", opacity: 0 })
            .to('.img-tree', {
                y: '0%',
                scale: 1,
            },"<");
            tlSecond.to(".question2", { opacity: 1 })
            .to('.img-tree-l', {
                left: '-15%',
                bottom: '1%',
                scale: 0.7,
            },"<")
            .to('.img-tree-r', {
                right: '-15%',
                bottom: '1%',
                scale: 0.7,
            },"<");
            tlSecond.from(".question3", { xPercent: "100", opacity: 0 })
            .to('.img-tree', {
                opacity: 0,
            },"<");
            tlSecond.to("#section2", { opacity: 0 });

            // -------------------------------------------------------------------------------------第3屏

            const tlThird = gsap.timeline({
                scrollTrigger: {
                    trigger: "#section3",
                    start: 'top top',
                    // end: 'bottom center',
                    pin: true,
                    markers: true,
                    scrub: true,
                },
            });

            tlThird.to('.img-road', { // 跑道、人物們放大
                height: '12.5%',
            },"<")
            .to(['#character_f2e, #character_ui'], { 
                height: '55.6%', 
            },"<")
            .to('#character_team', {
                height: '48.8%',
            },"<")
            .to('.img-cloud01', {
                left: '-70%',
                scale: 3,
                top: '80%',
            },"<")
            .to('.img-cloud02', {
                left: '70%',
                scale: 3,
                top: '80%',
            },"<")
            .to(['.img-cloud01','.img-cloud02'], {
                opacity: 1,
            })

            tlThird.to("#section3 .title", { opacity: 1 })
            .to("#section3 .desc", { opacity: 1 },"<")
            .from(".btn-group", { yPercent: "10", opacity: 0 })
            .to("#section3 .title", { opacity: 0 })
            .to("#section3 .desc", { opacity: 0 },"<")
            .to(".btn-group", { yPercent: "20", opacity: 0 },"<")



            // -------------------------------------------------------------------------------------最後1屏
            const tlLast = gsap.timeline({
                scrollTrigger: {
                    trigger: "#section4",
                    pin: true,
                    // markers: true,
                    scrub: true,
                },
            });

            // 兩朵雲，出現 > 消失
            tlLast.to(['.img-cloud01','.img-cloud02'], {
                left: 0,
                scale: 0,
                top: 0,
            })

            const tlLast2 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#section4",
                    pin: true,
                    // markers: true,
                    scrub: true,
                },
            });
            tlLast2.to('.img-finish', {
                scale: 1,
                opacity: 1,
            })
            .to('.img-finishLine', {
                scale: 1,
                opacity: 1,
            },"<")
            .to('.img-finishLine-l', {
                x:' -100%',
            })
            .to('.img-finishLine-r', {
                x:' 0%',
            },"<")
            .to('.img-finishLine-l', {
                x:' -200%',
                opacity: 0,
            })
            .to('.img-finishLine-r', {
                x:' 100%',
                opacity: 0,
            },"<")
            .to(['#character_f2e, #character_ui','#character_team'], { //人物們變大
                scale: 1.3, 
            },"<")
            .to(['#character_f2e'], { //f2e
                left: "-7%", 
            },"<")
            .to(['#character_team'], { //team
                right: "-7%", 
            },"<")
            .to(['#character_f2e, #character_ui','#character_team'], { //人物們變大
                opacity: 0,
            })            
            .to(['#character_ui'], { //f2e
                bottom: '15%',
                scale: 2.2, 
            },"<")
            .to(['#character_f2e'], { //f2e
                left: "-20%", 
                bottom: '10%',
                scale: 1.8, 
            },"<")
            .to(['#character_team'], { //team
                right: "-20%", 
                bottom: '6%',
                scale: 1.7, 
            },"<")
            .to('.img-finish', {
                opacity: 0,
            })
            .to(['.btn-join-group','.map','.img-logo-small'], {
                opacity: 0,
            })
            // .to(['.bottom-layer .join-group'], {
            .to(['#section4 .join-group'], {
                opacity: 1,
            })
        },
        '(max-width:767px)':function(){

            const tlSetM = gsap.timeline({ //rwd M: resize設定
                scrollTrigger: {
                    trigger: "#section1",
                    start: 'top bottom',
                    end: 'top top',
                    markers: true,
                    scrub: true,
                },
            });
            tlSetM.to('.img-road', { // 跑道、人物們resize設定
                height: '40px',
            }).to(['#character_f2e, #character_ui'], { 
                height: '192.5px', 
            },"<").to('#character_team', {
                height: '169px',
            },"<")

            const tlFirstM = gsap.timeline({
                scrollTrigger: {
                    trigger: ".bottom-layer.m",
                    start: 'center center',
                    end: '300px top',
                    // markers: true,
                    scrub: true,
                },
            });

            tlFirstM.to('.text-ready', {  // 1.ready文字消失
                opacity: 0,
            }).to(['.img-light','.img-lights'], {  // 5.紅綠燈消失
                opacity: 0,
            },"<")


            const tlSecondM = gsap.timeline({
                scrollTrigger: {
                    trigger: "#section2",
                    start: 'top center',
                    end: '70% center',
                    // markers: true,
                    scrub: true,
                },
            });

            tlSecondM.to('.img-road', { // 跑道、人物們縮小
                height: '19px',
            }).to(['#character_f2e, #character_ui'], { 
                height: '90.75px', 
            },"<").to('#character_team', {
                height: '79.5px',
            },"<").from('.question1', {  // 1. question1 左入
                x: -600,
                y: -400,
            }).from('.question2', {  // 2. question2 顯示
                opacity: 0,
                y: -100,
            }).from('.question3', {  // 3. question3 右入
                x: 600,
                y: -200,
            })


            const tlThirdM = gsap.timeline({
                scrollTrigger: {
                    trigger: "#section3",
                    start: 'top center',
                    end: '65% center',
                    // markers: true,
                    scrub: true,
                },
            });

            tlThirdM.from(['#section3 .title','#section3 .desc'], {  // 1. title、desc 下移顯示
                opacity: 0,
                y: -100,
            }).from(['.btn-group1','.btns .img-character-f2e'], {  // 2. btn1 右入
                x: 600,
                y: -200,
            }).from(['.btn-group2','.btns .img-character-ui'], {  // 3. btn2 左入
                x: -600,
                y: -200,
            }).from(['.btn-group3','.btns .img-character-team'], {  // 4. btn3 右入
                x: 600,
                y: -200,
            })


            const tlLastM = gsap.timeline({
                scrollTrigger: {
                    trigger: "#section4",
                    start: 'top center',
                    end: '65% center',
                    // markers: true,
                    scrub: true,
                },
            });

            tlLastM.to('.img-road', { // 跑道、人物們放大
                height: '40px',
            }).to(['#character_f2e, #character_ui'], { 
                height: '192.5px', 
            },"<").to('#character_team', {
                height: '169px',
            },"<")
            
        },
    })


    window.addEventListener('scroll', function(){

    } )






















            // gsap.to('.img-road', {
            //     duration: .5,
            //     height: '9.6%',
            //     scrollTrigger: {
            //         trigger: "#trigger02",  //觸發得物件
            //         start: "top",
            //         onLeaveBack: function(){
            //             gsap.to('.img-road',{
            //                 duration: .5,
            //                 height: '12.5%',
            //             })
            //         },
            //     },
            // });
            // gsap.to(['#character_f2e, #character_ui'], {
            //     duration: .5,
            //     height: '33.89%', 
            //     scrollTrigger: {
            //         trigger: "#trigger02",  //觸發得物件
            //         start: "top",
            //         onLeaveBack: function(){
            //             gsap.to(['#character_f2e, #character_ui'],{
            //                 duration: .5,
            //                 height: '55.6%',
            //             })
            //         },
            //     },
        
            // });
            // gsap.to('#character_team', {
            //     duration: .5,
            //     height: '29.72%',
            //     scrollTrigger: {
            //         trigger: "#trigger02",  //觸發得物件
            //         start: "top",
            //         onLeaveBack: function(){
            //             gsap.to('#character_team',{
            //                 duration: .5,
            //                 height: '48.8%',
            //             })
            //         },
            //     },
            // });




    // gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger.matchMedia({
    //     '(min-width:768px)':function(){
    //         let scrollTrigger2 = {
    //             trigger: "#trigger02",  //觸發得物件
    //             start: "top",
    //             // markers: true, // 顯示標記
    //         }
            
    //         gsap.to('.img-road', {
    //             duration: .5,
    //             height: '9.6%',
    //             scrollTrigger: scrollTrigger2,
    //         });
    //         gsap.to('#character_f2e, #character_ui', {
    //             duration: .5,
    //             height: '33.89%', 
    //             scrollTrigger: scrollTrigger2
        
    //         });
    //         gsap.to('#character_team', {
    //             duration: .5,
    //             height: '29.72%',
    //             scrollTrigger: scrollTrigger2
    //         });

    //         let tlNew = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: "#trigger02",  //觸發得物件
    //                 // endTrigger: '#trigger03',
    //                 start: "top bottom",
    //                 end: "+=500 top", 
    //                 markers: true, // 顯示標記
    //                 // pin: true,
    //                 scrub: true
    //             }
    //         });

    //         tlNew.to('#h1', {
    //             opacity: 1,
    //         }).to('#h2', {
    //             opacity: 1,
    //         }).to('#h1', {
    //             opacity: 0,
    //         }).to('#h2', {
    //             opacity: 0,
    //         })

    //         // let tlNew2 = gsap.timeline({
    //         //     scrollTrigger: {
    //         //         trigger: "#trigger03",  //觸發得物件
    //         //         endTrigger: '#section3',
    //         //         start: "top 100px",
    //         //         end: "bottom bottom-=100px",
    //         //         markers: true, // 顯示標記
    //         //         pin: true,
    //         //         scrub: true
    //         //     }
    //         // });

    //         // tlNew2.to('#h3', {
    //         //     opacity: 1,
    //         // }).to('#h4', {
    //         //     opacity: 1,
    //         // }).to('#h3', {
    //         //     opacity: 0,
    //         // }).to('#h4', {
    //         //     opacity: 0,
    //         // })
    //     },
    //     "(min-width: 576px) and (max-width: 767px)": function() {
    //         // The ScrollTriggers created inside these functions are segregated and get
    //         // reverted/killed when the media query doesn't match anymore. 
    //     },
    // })

    // const tlNew = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: "#trigger02",  //觸發得物件
    //         endTrigger: '#trigger03',
    //         // start: "bottom",
    //         // end: "top",
    //         markers: true, // 顯示標記
    //         pin: true,
    //         scrub: true
    //     }
    // });

    // tlNew.to('#h1', {
    //     opacity: 1,
    // }).to('#h2', {
    //     opacity: 1,
    // }).to('#h2', {
    //     opacity: 0,
    // })

    // gsap.to(".box", {
    //     x: 300,
    //     duration: 3,
    //     rotation: 360,
    //     scrollTrigger: {
    //         trigger: ".box", //觸發得物件
    //         start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
    //         end: "+=300", //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
    //         pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
    //         scrub: true, // 物件動畫根據卷軸捲動程度跑
    //         toggleClass: "active", // 增加移除的class，class名稱須為字串
    //         markers: true // 顯示標記
    //     }
    // })
    
    















    //設定全域場景
    // let controller = new ScrollMagic.Controller();
    // //固定場景
    // let sticky = new TimelineMax;
    // sticky.to('.img-road', 1 , {
    //     height: '9.6%',
    // })

    // let sticky2 = new TimelineMax;
    // sticky2.to('#character_f2e', 1 , {
    //     height: '33.89%', 
    // })

    // let sticky3 = new TimelineMax;
    // sticky3.to('#character_ui', 1 , {
    //     height: '33.89%', 
    // })

    // let sticky4 = new TimelineMax;
    // sticky4.to('#character_team', 1 , {
    //     height: '29.72%',   
    // })

    // new ScrollMagic.Scene({
    //     triggerElement:'#trigger03',
    //     triggerHook: 0,
    //     duration:'10%',//四段動畫，故要4倍高度(卷軸跑多少)
    // }).setPin('main') //固定場景
    // .setTween([sticky,sticky2,sticky3,sticky4]).addIndicators().addTo(controller);


    //class事件.setClassToggle() //取得.section03加入on的class屬性
    // new ScrollMagic.Scene({
    //     triggerElement:'#trigger03'
    // }).setClassToggle('.upper-layer','on').addIndicators().addTo(controller);



})