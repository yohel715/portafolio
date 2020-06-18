import React from "react";
import avatar from "../img/avatar.png";
import logo from "../img/ylogo_white.png";

const About = () => {
  return (
    <div className="about_content">
      <div class="row">
        <div class="column about_column about_column__left">
          <div className="avatar">
            <img
              src={avatar}
              height="256"
              class="rounded mx-auto d-block mr-2"
              alt="avatar"
            />
          </div>
          <h1 className="about_title font-weight-bold text-center m-2 text-uppercase">
            Acerca
            <br />
            De mí
            <br />
          </h1>
        </div>
        <div class="column about_column">
          <div class="about_info">
            <p class="font-weight-bold text-center m-2">
              Hola
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pharetra, magna eget ultricies mollis, neque leo vestibulum est,
              sit amet suscipit ipsum leo nec quam. Proin iaculis gravida neque,
              id ultrices ligula hendrerit et. In tellus justo, aliquet quis
              aliquam in, egestas a augue. <br></br> Praesent sit amet ligula
              velit. Donec eleifend turpis eu dolor lacinia, quis accumsan arcu
              iaculis. Cras tempus lectus neque, vel varius purus elementum
              tincidunt. Mauris porta urna velit, eu dictum nisl hendrerit sed.
              <br></br>Duis erat urna, elementum quis erat at, iaculis volutpat
              massa. Cras in tempus ante. <br></br> Mauris ac urna malesuada,
              pulvinar augue nec, aliquet enim. Sed imperdiet vitae mi vel
              dignissim. <br></br>Etiam sed pretium enim. Praesent a nunc quis
              ante volutpat consectetur quis nec risus. Aliquam congue, massa
              tempus pharetra laoreet, risus sem dictum sapien, non aliquam
              lacus urna nec augue. Donec tincidunt dui odio, vel auctor arcu
              luctus a.<br></br>
              Quisque fringilla finibus tristique. Nullam congue justo ligula,
              vitae placerat sapien vestibulum et. <br></br>In nec pharetra
              tellus, quis ultricies sapien. Vestibulum pharetra quam vel ipsum
              sodales aliquet at a nisl. <br></br>Vivamus eget est non tellus
              aliquet hendrerit ut vitae purus. <br></br> Suspendisse vitae quam
              ac diam accumsan varius id vel metus. Ut eu eleifend nunc. Nunc
              malesuada massa eget metus viverra aliquam. Curabitur ac sagittis
              purus. Pellentesque vel commodo mauris. Suspendisse varius
              facilisis convallis. Morbi faucibus sapien vitae neque lacinia
              aliquam eget eu orci.<br></br> Donec eu ullamcorper ipsum, sit
              amet posuere enim. Praesent non gravida leo, a tempor enim.
              <br></br> Curabitur elementum tincidunt tincidunt. Quisque
              pellentesque maximus tempor. Aliquam erat volutpat. Phasellus
              fringilla eu magna eget tristique. Donec ac est non ex pharetra
              ultrices. Pellentesque tempor blandit massa, ac tristique justo
              euismod vel. Nunc pulvinar libero pulvinar, fringilla orci vitae,
              elementum mi. Mauris quis diam orci. Ut aliquet posuere dui eu
              consectetur. <br></br>Proin ut ante porttitor, pretium augue nec,
              convallis lorem. <br></br> Praesent consequat molestie dui et
              viverra.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pharetra, magna eget ultricies mollis, neque leo vestibulum est,
              sit amet suscipit ipsum leo nec quam. Proin iaculis gravida neque,
              id ultrices ligula hendrerit et. In tellus justo, aliquet quis
              aliquam in, egestas a augue. <br></br> Praesent sit amet ligula
              velit. Donec eleifend turpis eu dolor lacinia, quis accumsan arcu
              iaculis. Cras tempus lectus neque, vel varius purus elementum
              tincidunt. Mauris porta urna velit, eu dictum nisl hendrerit sed.
              <br></br>Duis erat urna, elementum quis erat at, iaculis volutpat
              massa. Cras in tempus ante. <br></br> Mauris ac urna malesuada,
              pulvinar augue nec, aliquet enim. Sed imperdiet vitae mi vel
              dignissim. <br></br>Etiam sed pretium enim. Praesent a nunc quis
              ante volutpat consectetur quis nec risus. Aliquam congue, massa
              tempus pharetra laoreet, risus sem dictum sapien, non aliquam
              lacus urna nec augue. Donec tincidunt dui odio, vel auctor arcu
              luctus a.<br></br>
              Quisque fringilla finibus tristique. Nullam congue justo ligula,
              vitae placerat sapien vestibulum et. <br></br>In nec pharetra
              tellus, quis ultricies sapien. Vestibulum pharetra quam vel ipsum
              sodales aliquet at a nisl. <br></br>Vivamus eget est non tellus
              aliquet hendrerit ut vitae purus. <br></br> Suspendisse vitae quam
              ac diam accumsan varius id vel metus. Ut eu eleifend nunc. Nunc
              malesuada massa eget metus viverra aliquam. Curabitur ac sagittis
              purus. Pellentesque vel commodo mauris. Suspendisse varius
              facilisis convallis. Morbi faucibus sapien vitae neque lacinia
              aliquam eget eu orci.<br></br> Donec eu ullamcorper ipsum, sit
              amet posuere enim. Praesent non gravida leo, a tempor enim.
              <br></br> Curabitur elementum tincidunt tincidunt. Quisque
              pellentesque maximus tempor. Aliquam erat volutpat. Phasellus
              fringilla eu magna eget tristique. Donec ac est non ex pharetra
              ultrices. Pellentesque tempor blandit massa, ac tristique justo
              euismod vel. Nunc pulvinar libero pulvinar, fringilla orci vitae,
              elementum mi. Mauris quis diam orci. Ut aliquet posuere dui eu
              consectetur. <br></br>Proin ut ante porttitor, pretium augue nec,
              convallis lorem. <br></br> Praesent consequat molestie dui et
              viverra.
            </p>
          </div>
          <div className="about_logo">
            <img
              src={logo}
              height="32"
              class="rounded mx-auto d-block mt-5"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
