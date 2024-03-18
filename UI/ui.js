import React from "react";
import Link from "next/link";
import { Icon_left_page, Icon_right_page, Svg_account_nick, Svg_verefy } from "./icon";
import Image from "next/image";


/*function page($key, max){
    if($key >=1 && $key<=max){
    window.location.href=window.location.origin+"/?page="+$key
    }
} */




function Pagination(props){

   let left = "?page="+(Number(props.getPage)-1);
   let right = "?page="+(Number(props.getPage)+1);
   let max = "?page="+(Number(props.maxPage));
    return (
<div className="block_page"> 
    <button className={props.getPage >1 ? "button_page" : "buttonEnd"}>{props.getPage >1 ? <Link href="?page=1">1...</Link>: "1..."}</button>
    <button className={props.getPage >1 ? "button_page" : "buttonEnd"}>{props.getPage >1 ? <Link href={left}><Icon_left_page/></Link> : <Icon_left_page/>}</button>
    <button>{props.getPage}</button>
    <button className={props.getPage <props.maxPage ? "button_page" : "buttonEnd"}> {props.getPage <props.maxPage ? <Link href={right}><Icon_right_page/></Link> : <Icon_right_page/>}</button>
    
    <button className={props.getPage <props.maxPage ? "button_page" : "buttonEnd"}>{props.getPage <props.maxPage ? <Link href={max}>...{props.maxPage}</Link> : "..."+props.maxPage}</button>
</div>
    );
}

function Content(props) {
  
    let id = "/promocode/"+props.id;
    let user_id = "/user/"+props.user_id;



    

    let src = "data:image/png;base64,"+props.img; //placeholder="blur"
        return (
              <>
              <div className="cartochka_content">
            
                <div className="information__content">
                <div>
                    <div className="image_content_block">
                    {/* <img className="image_content"  src={props.img} alt="image_promo" /> */}
                    <Image src={props.img} alt="image_promo" width={192} height={192} style={{width: '100%',height: 'auto',}} className="image_dec" loading = 'lazy' />
                    <Image src={props.img} alt="image_promo" width={92} height={92} style={{width: '100%',height: 'auto',}} className="image_mob" loading = 'lazy'/>
                    {/* <Image src={props.img} alt="image_promo" fill={false} width={92} height={92}  /> */}
                    </div>
                </div>
                <div>
                    <div id="text_content"> <Link href={id}><h2>{props.title}</h2></Link></div>
                    <div id="description_content"><p>{props.description}</p></div>
                    <div className="cena_cartochka_content"><p>{props.skidka==0 ? props.cena+"₽" : props.skidka+"%"}</p> <del>{(Number(props.type ) && Number(props.decena)!=0 ) ? props.decena+"₽" : null}</del></div>
                    </div>
                </div>
                <div className="buttom_content">
                <Link href={user_id} > <div id="auchor_nickname_content"><Svg_account_nick /> {props.nickname} {props.verefy ? <Svg_verefy /> : null}</div> </Link>
                        <Link href={id} className="button_content"> Подробнее</Link>
                    </div>
            </div>
              </>
        );

  
}

function No_content(){
    return(<>
    <div className="block_no_content">
    <svg enable-background="new 0 0 512 512" height="250px" id="Coupon" version="1.1" viewBox="0 0 512 512" width="250px"  xmlns="http://www.w3.org/2000/svg">
    <g><path d="M209.398,185.957c-10.781,3.579-16.642,15.261-13.064,26.043c2.867,8.637,10.931,14.114,19.569,14.114   c2.146,0,4.328-0.339,6.474-1.051c10.781-3.578,16.642-15.261,13.064-26.042v-0.001   C231.862,188.239,220.178,182.379,209.398,185.957z M219.228,215.573c-5.549,1.843-11.561-1.175-13.402-6.724   c-1.841-5.548,1.175-11.56,6.723-13.401c1.104-0.366,2.227-0.54,3.331-0.54c4.445,0,8.596,2.819,10.071,7.263   C227.792,207.72,224.775,213.731,219.228,215.573z"/><path d="M301.762,228.705c-3.587-10.784-15.271-16.644-26.049-13.059c-10.775,3.574-16.635,15.256-13.063,26.036   c0.209,0.631,0.453,1.247,0.72,1.852h-20.762l35.889-71.55l-8.939-4.483l-38.137,76.033h-52.963v10H338.79v-10h-37.725   C303.074,238.991,303.428,233.742,301.762,228.705z M272.143,238.541c-1.839-5.552,1.175-11.563,6.722-13.403   c5.55-1.844,11.562,1.172,13.405,6.716c1.432,4.324-0.018,8.951-3.521,11.681h-13.082   C274.035,242.259,272.8,240.528,272.143,238.541z"/><rect height="109.405" transform="matrix(-0.7072 -0.7071 0.7071 -0.7072 232.865 751.8976)" width="10" x="267.141" y="273.023"/><path d="M244.375,284.074c-11.36,0-20.602,9.242-20.602,20.602c0,11.36,9.242,20.604,20.602,20.604s20.601-9.243,20.601-20.604   C264.977,293.316,255.735,284.074,244.375,284.074z M244.375,315.279c-5.846,0-10.602-4.757-10.602-10.604   c0-5.846,4.756-10.602,10.602-10.602c5.846,0,10.601,4.756,10.601,10.602C254.977,310.522,250.221,315.279,244.375,315.279z"/><path d="M277.363,353.742c0,11.359,9.242,20.602,20.603,20.602s20.602-9.242,20.602-20.602c0-11.36-9.241-20.603-20.602-20.603   S277.363,342.382,277.363,353.742z M308.567,353.742c0,5.846-4.756,10.602-10.602,10.602c-5.847,0-10.603-4.756-10.603-10.602   c0-5.847,4.756-10.603,10.603-10.603C303.812,343.14,308.567,347.896,308.567,353.742z"/><path d="M70.064,253.534h44.323v-0.001c11.482,0,20.824,12.171,20.824,27.13h10c0-14.959,9.341-27.13,20.824-27.13v-10   c-11.482,0-20.824-12.171-20.824-27.13h-10c0,14.959-9.342,27.13-20.824,27.13v0.001H60.064v45.847l-25.727-77.507l42.073-13.955   l-3.148-9.491l-51.566,17.104l38.369,115.595v93.728H338.79v-10H70.064V253.534z M140.212,236.639   c2.644,4.879,6.212,8.964,10.405,11.895c-4.193,2.932-7.761,7.016-10.405,11.895c-2.644-4.879-6.212-8.963-10.405-11.895   C134,245.603,137.568,241.518,140.212,236.639z"/><rect height="10" width="26.944" x="370.013" y="404.855"/><path d="M485.305,297.021h5v-53.487H370.013v10h110.292v33.786c-20.572,2.477-36.565,20.038-36.565,41.265   c0,21.234,15.993,38.801,36.565,41.277v34.994h-19.047v-0.002c-11.482,0-20.824-12.17-20.824-27.129h-10   c0,14.959-9.342,27.129-20.824,27.129v10c11.482,0,20.824,12.172,20.824,27.131h10c0-14.947,9.325-27.108,20.795-27.129h29.076   v-54.694h-5c-17.405,0-31.565-14.165-31.565-31.577C453.739,311.18,467.899,297.021,485.305,297.021z M435.434,421.748   c-2.645-4.879-6.212-8.963-10.405-11.895c4.193-2.931,7.761-7.015,10.405-11.894c2.645,4.879,6.212,8.963,10.404,11.894   C441.646,412.785,438.078,416.869,435.434,421.748z"/><rect height="11" width="10" x="349.123" y="378.527"/><rect height="11" width="10" x="349.123" y="312.527"/><rect height="11" width="10" x="349.123" y="334.527"/><rect height="11" width="10" x="349.123" y="400.527"/><rect height="11" width="10" x="349.123" y="356.527"/><rect height="11" width="10" x="349.123" y="246.527"/><rect height="11" width="10" x="349.123" y="268.527"/><rect height="11" width="10" x="349.123" y="290.527"/><rect height="19.897" width="10" x="386.695" y="344.243"/><rect height="43.599" width="10" x="386.695" y="290.645"/><rect height="73.496" width="10" x="404.609" y="290.645"/><rect height="10" width="88.908" x="111.457" y="297.849"/><rect height="10" width="11.675" x="89.781" y="297.849"/><rect height="10" width="77.409" x="89.781" y="352.992"/><rect height="10" width="15.337" x="185.028" y="325.421"/><rect height="10" width="87.348" x="89.781" y="325.421"/><rect height="160.334" transform="matrix(0.3149 0.9491 -0.9491 0.3149 285.2887 -99.7354)" width="10" x="206.726" y="67.571"/><path d="M423.697,82.656l10.642,32.063c-8.394,3.941-15.183,10.538-19.406,18.956c-4.979,9.925-5.795,21.193-2.298,31.729   c3.498,10.541,10.891,19.088,20.814,24.068c8.418,4.223,17.803,5.453,26.892,3.594l12.596,37.954l9.491-3.149l-15.652-47.164   l-4.746,1.574c-8,2.656-16.557,2.035-24.095-1.747c-7.538-3.781-13.152-10.273-15.81-18.279   c-2.654-8.001-2.035-16.558,1.746-24.095s10.27-13.15,18.27-15.806l4.746-1.575l-16.848-50.764l-114.168,37.89l3.149,9.491   L423.697,82.656z"/><rect height="11" transform="matrix(-0.9491 0.315 -0.315 -0.9491 649.6716 178.7206)" width="9.999" x="305.396" y="136.352"/><rect height="10" transform="matrix(-0.315 -0.9491 0.9491 -0.315 230.7095 617.2644)" width="11" x="332.614" y="220.373"/><rect height="9.999" transform="matrix(0.315 0.9491 -0.9491 0.315 322.687 -205.151)" width="10.999" x="297.966" y="115.973"/><rect height="9.999" transform="matrix(0.315 0.9491 -0.9491 0.315 420.9428 -174.2473)" width="10.999" x="325.685" y="199.493"/><rect height="9.999" transform="matrix(-0.3149 -0.9491 0.9491 -0.3149 262.8158 515.1609)" width="11.001" x="311.825" y="157.733"/><rect height="9.999" transform="matrix(0.315 0.9491 -0.9491 0.315 396.3893 -181.971)" width="11" x="318.755" y="178.613"/><rect height="19.897" transform="matrix(0.9491 -0.3149 0.3149 0.9491 -46.1454 127.1575)" width="10.001" x="365.446" y="196.438"/><rect height="43.599" transform="matrix(0.9491 -0.3149 0.3149 0.9491 -34.3368 121.0006)" width="10.001" x="352.296" y="144.964"/><rect height="73.496" transform="matrix(-0.9491 0.3149 -0.3149 -0.9491 795.522 221.5186)" width="10.001" x="374.866" y="138.275"/></g>
    </svg>
    <div>Скидок нет но вы держитесь!</div>
        </div>
    </>);
}

export {Pagination, Content, No_content};